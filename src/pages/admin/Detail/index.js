import React, { useEffect, useState } from 'react'
import "./index.css"
import { getAllFeeBillAPI, getAllFeeAPI, getSubmit } from "../../../apis/fee/index"
import { formatMoney } from "../../../constant/function"
import moment from "moment"

function Detail(props) {
    const [fee, setFee] = useState({
        _id:"Không có",
        created_at: "",
        description: "Xin vui lòng ấn chi tiết",
        from: "2020-01-01T00:00:00.000Z",
        isDone: false,
        isRequired: true,
        name: "Vui lòng ấn chi tiết",
        price: 0,
        to: "2020-12-01T00:00:00.000Z",
        type: 0,
    });
    const [listBillNotSubmited, setlistBillNotSubmited] = useState([
        {
            _id: "",
            isSubmitted: false,
            received: 0,
            home: {
                _id: "5fddc65e51423d30f8bb52cd",
                address: {
                    city: {
                        id: 1,
                        name: "Hà Nội"
                    },
                    district: {
                        id: 3,
                        name: "Hai Bà Trưng"
                    },
                    commune: {
                        id: 102,
                        name: "Thanh Nhàn"
                    },
                    detail: "15 ngách 38 ngõ 84 phố Võ Thị Sáu"
                },
                phonenumber: null,
                created_at: "2020-12-19T09:14:36.993Z",
                members: [
                    "5fddc67151423d30f8bb52ce",
                    "5fddc6ae51423d30f8bb52cf"
                ],
                username: "01759376815",
                host: "Zikiun btruscv",
            },
        },
    ])
    const [listBillSubmited, setlistBillSubmited] = useState([
        {
            _id: "",
            isSubmitted: false,
            received: 0,
            home: {
                _id: "5fddc65e51423d30f8bb52cd",
                address: {
                    city: {
                        id: 1,
                        name: "Hà Nội"
                    },
                    district: {
                        id: 3,
                        name: "Hai Bà Trưng"
                    },
                    commune: {
                        id: 102,
                        name: "Thanh Nhàn"
                    },
                    detail: "15 ngách 38 ngõ 84 phố Võ Thị Sáu"
                },
                phonenumber: null,
                created_at: "2020-12-19T09:14:36.993Z",
                members: [
                    "5fddc67151423d30f8bb52ce",
                    "5fddc6ae51423d30f8bb52cf"
                ],
                username: "01759376815",
                host: "Zikiun btruscv",
            },
        },
    ])

    const [total_bill, set_total_bill] = useState(0);
    const [total_fee, set_total_fee] = useState(0);
    const [completed_bill, set_completed_bill] = useState(0);
    const [received_money, set_received_money] = useState(0);
    const [not_received_money, set_not_received_money] = useState(0);


    useEffect(() => {
        getData();
        // console.log("SAU KHI RUYỀN: "+ props.fee_id)
    }, [props.fee_id])



    const getData = async () => {
        const resDetail = await getAllFeeAPI(props.fee_id);
        const resBills = await getAllFeeBillAPI(null, props.fee_id);

        if (resDetail.data.code == 1000) {
            setFee(resDetail.data.data);
            if (resBills.data.code == 1000) {
                let dataBills = resBills.data.data;
                let dataDetail = resDetail.data.data;
                let tong_ho = 0;
                let tong_tien_phai_thu = 0;
                let don_hoan_thanh = 0;
                let tien_da_thu = 0;
                let tien_chua_thu = 0;
                let notSubmit = [];
                let submit =[];
                dataBills.forEach(bill => {
                    tong_ho++;
                    if (dataDetail.type == 1) {
                        tong_tien_phai_thu += dataDetail.price;
                        if (bill.isSubmitted) {
                            tien_da_thu += dataDetail.price;
                            
                        }
                    } else if (dataDetail.type == 2) {
                        tong_tien_phai_thu += (dataDetail.price * bill.home.members.length);
                        if (bill.isSubmitted) {
                            tien_da_thu += (dataDetail.price * bill.home.members.length);
                            
                        }
                    }
                    if(bill.isSubmitted){
                        don_hoan_thanh++;
                        submit.push(bill)
                    }else if(!bill.isSubmitted){
                        notSubmit.push(bill)
                    }
                })
                tien_chua_thu = tong_tien_phai_thu - tien_da_thu;
                set_total_bill(tong_ho);
                set_total_fee(tong_tien_phai_thu);
                set_completed_bill(don_hoan_thanh);
                set_received_money(tien_da_thu);
                set_not_received_money(tien_chua_thu);
                
                setlistBillNotSubmited(notSubmit);
                setlistBillSubmited(submit)
            }
        }

    }

    const getSubmitted = async (bill_id,received,index) =>{
        const res = await getSubmit(bill_id,received);
        // console.log(res);
        if(res.data.code == 1000){
            // 
            let new_list_not_submit = listBillNotSubmited.filter(e => {
                return listBillNotSubmited.indexOf(e) != index
            });
            props.addTotalMoney(received);
            set_completed_bill(completed_bill+ 1);
            set_not_received_money(not_received_money- received);
            set_received_money(received_money + received);
            setlistBillNotSubmited(new_list_not_submit);
            setlistBillSubmited(listBillSubmited.concat(res.data.data))
        }
    }

    return (
        <div class="col s10 offset-s1">
            {/* <!-- title --> */}
            <div class="row list-bill-row">
                <div class="col s5">
                    <h4 id="ctkt">{fee.name}</h4>
                </div>
                <div class="col s2">
                    {/* <span>Mã: null</span> */}
                </div>
                <div class="col s5">
                    <a class="waves-effect waves-light btn-small indigo accent-2"><i
                        class="material-icons left">edit</i>Sửa thông tin</a>
                    <a class="waves-effect waves-light btn-small red accent-2"><i
                        class="material-icons left">remove</i>Xóa khoản thu</a>

                </div>
            </div>
            {/* <!-- bảng chi tiết --> */}
            <div class="row table-detail-row">
                {/* <!-- Table --> */}
                <div class="col s12">
                    <table class="highlight centered">
                        <thead class="card-panel indigo accent-2">
                            <tr class="white-text">
                                <th class="col s3">Mã khoản thu</th>
                                <th class="col s3">Tên khoản thu</th>
                                <th class="col s3">Tổng số tiền nộp</th>
                                <th class="col s3">Thời gian nộp</th>
                            </tr>
                        </thead>
                    </table>
                    {/* {fee.created_at? */}
                    <ul class="collapsible">
                        <li>
                            <div class="collapsible-header padding-off">
                                <table class="highlight centered">
                                    <tbody>
                                        <tr>
                                            <td class="col s3">{fee._id}</td>
                                            <td class="col s3">{fee.name}</td>
                                            <td class="col s3">{formatMoney(fee.price)}</td>
                                            <td class="col s3">{moment(fee.from).format("L")} -{moment(fee.to).format("L")}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="collapsible-body grey lighten-2">
                                <div>
                                    <span className="blue-text">Mô tả: </span>
                                </div>
                                <div>
                                    <span>{fee.description}</span>
                                </div>
                                <div className="row">
                                    <div className="col s3">
                                        <span className="blue-text" >
                                            Loại thu:  <span className="black-text">{fee.type == 1 ? "theo hộ" : "theo nhân khẩu"}</span>
                                        </span>
                                    </div>
                                    <div className="col s3">
                                        <span className="blue-text">
                                            Yêu cầu:  <span className="black-text">{fee.isRequired ? "bắt buộc" : "tự nguyện"}</span>
                                        </span>
                                    </div>
                                    <div className="col s6"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* // :null
                    // } */}
                </div>

            </div>
            {/* <!-- dashboard chi tiết --> */}
            <div class="row dashboard-detail-row">
                <div class="col s6">

                    <ul class="dashboard-ul">
                        <li>
                            <span>&bull; Tổng số hộ phải thu </span><span>{total_bill}</span>
                        </li>
                        <li>
                            <span>&bull; Tổng số tiền phải thu </span><span>{formatMoney(total_fee)}</span>
                        </li>
                        <li>
                            <span>&bull; Số đơn đã hoàn thành </span><span>{completed_bill}</span>
                        </li>
                        <li>
                            <span>&bull; Số tiền đã thu </span><span>{formatMoney(received_money)}</span>
                        </li>
                        <li>
                            <span>&bull; Số tiền chưa thu </span><span>{formatMoney(not_received_money)}</span>
                        </li>
                    </ul>
                </div>
                <div class="col s4"></div>
            </div>
            {/* <!-- bảng các hộ --> */}
            <div class="row list-house-row">
                <div class="col s5">
                    <h4 id="dsht">Danh sách các hộ</h4>
                </div>
                {/* <!-- nút tab khoản thu --> */}
                <div class="col s4">
                    <ul class="tabs">
                        <li class="tab col s6"><a href="#test3" class="active indigo-text text-accent-3">Chưa nộp</a></li>
                        <li class="tab col s6"><a class="indigo-text text-accent-3" href="#test4">Đã nộp</a>
                        </li>
                    </ul>
                </div>
                {/* <!-- input tìm khoản thu --> */}
                <div class="col s3">
                    <input type="text" placeholder="Tìm khoản thu..." />
                </div>
                {/* <!-- tab chờ xử lý --> */}
                <div id="test3" class="col s12">

                    <table class="table-kt highlight centered">
                        <thead class="card-panel indigo accent-2">
                            <tr class="white-text">
                                <th>Mã hộ</th>
                                <th>Tên chủ hộ</th>
                                <th>Địa chỉ</th>
                                <th>Tổng số tiền nộp</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {listBillNotSubmited.map(bill => {
                                if (!bill.isSubmitted && bill._id) {
                                    let inputPrice = 0;
                                    // console.log(bill)
                                    if (fee.type == 1) {
                                        inputPrice = fee.price;
                                    } else if (fee.type == 2) {
                                        inputPrice = fee.price * bill.home.members.length;
                                    }
                                    return (
                                        <tr>
                                            <td>{bill.home._id}</td>
                                            <td>{bill.home.host}</td>
                                            <td>{bill.home.address.detail}</td>
                                            <td >
                                                {fee.isRequired ?
                                                    <span class="center-align">{formatMoney(inputPrice)}</span>
                                                    :<input type="text" value={formatMoney(inputPrice)} onchange={(e) => {
                                                        inputPrice = e.target.value;
                                                    }} 
                                                    class="center-align" />
                                                }

                                                
                                            </td>
                                            <td><a class="waves-effect waves-light btn indigo accent-2" 
                                                onClick = {()=>getSubmitted(bill._id,inputPrice,listBillNotSubmited.indexOf(bill))}>
                                                    Đánh dấu nộp
                                            </a></td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
                {/* <!-- tab đã xử lý --> */}
                <div id="test4" class="col s12">
                    <table class="table-kt highlight centered">
                        <thead class="card-panel indigo accent-2">
                            <tr class="white-text">
                                <th>Mã hộ</th>
                                <th>Tên chủ hộ</th>
                                <th>Địa chỉ</th>
                                <th>Tổng số tiền nộp</th>
                            </tr>
                        </thead>

                        <tbody>
                        {listBillSubmited.map(bill => {
                               
                                if (bill.isSubmitted && bill._id) {
                                    let inputPrice = 0;
                                    // console.log(bill)
                                    if (fee.type == 1) {
                                        inputPrice = fee.price;
                                    } else if (fee.type == 2) {
                                        inputPrice = fee.price * bill.home.members.length;
                                    }
                                    return (
                                        <tr>
                                            <td>{bill.home._id}</td>
                                            <td>{bill.home.host}</td>
                                            <td>{bill.home.address.detail}</td>
                                            <td >
                                                <span class="center-align">{formatMoney(inputPrice)}</span>
                                            </td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Detail
