import React, { useEffect, useState } from 'react'
import { getAllFeeAPI, getAllFeeBillAPI ,getFeeDoneAPI} from "../../../apis/fee/index"
import {formatMoney} from "../../../constant/function"
import "./index.css"
import moment from "moment";

const this_month = new Date(Date.now()).getMonth() + 1;
function Dashboard(props) {
    const [year_total_fees, set_year_total_fees] = useState(0);
    const [month_total_fees, set_month_total_fees] = useState(0);
    const [done_fees, set_done_fees] = useState(0);
    const [money_received, set_money_received] = useState(0);
    const [in_process_data, set_in_process_data] = useState([])
    const [processed_data, set_processed_data] = useState([])

    useEffect(() => {
        set_money_received(money_received + props.money);
    }, [props.money])
    const getDetail = (fee_id) => {
        props.getDetail(fee_id);
    }
    const getDone = async (fee_id, index) => {
        const res= await getFeeDoneAPI(fee_id);
        if(res.data.code == 1000){
            // console.log(res.data.data);
            // sau khi gọi done api, nếu thành công sẽ trả về 1 cái fee giống khung => chỉ việc áp lại vào bên processed_data
            // và sau đó xóa cái ở in_process_data 
            // sau đó phải cập nhật lại thông số trên dashboard số khoản thu xong
            let new_in_process_data = in_process_data.filter(e => {
                return in_process_data.indexOf(e) != index
            });
            set_processed_data(processed_data.concat(in_process_data[index]))
            set_in_process_data(new_in_process_data);
            set_done_fees(done_fees + 1);
        }
        else{
            // TODO: nếu không thành công sẽ tạo 1 thông báo không thành công
            // console.log(res.data)
        }

    

    }

    useEffect(() => {
        getAllFee()
    }, [])


    useEffect(() => {
        if(props.created){
            set_in_process_data([...in_process_data,props.created]);
        }
    }, [props.created])

    const getAllFee = async () => {
        const res = await getAllFeeAPI();
        // console.log("GET ALL FEE"+ JSON.stringify(res.data))
        if (res.data.code == 1000) {
            // console.log(res.data.data);
            let money = 0;
            let in_year = 0;
            let in_month = 0;
            let done = 0;
            let now = Date.now();
            let in_process = [];
            let processed = [];
            let month = new Date(now).getMonth();
            let year = new Date(now).getFullYear();
            res.data.data.listFee.forEach(fee => {
                // tính tổng khoản thu trong năm
                if (new Date(fee.from).getFullYear() <= year && year <= new Date(fee.to).getFullYear()) {
                    in_year++;
                }
                if (new Date(fee.from).getMonth() <= month && month <= new Date(fee.to).getMonth()) {
                    in_month++;
                }
                if (fee.isDone) {
                    done++;
                    processed.push(fee)
                }
                if (!fee.isDone) {
                    in_process.push(fee);
                }

            });
            set_done_fees(done);
            set_month_total_fees(in_month);
            set_year_total_fees(in_year);
            set_in_process_data(in_process);
            set_processed_data(processed);
            res.data.data.listFee.forEach(async (fee) => {
                const resBill = await getAllFeeBillAPI(null, fee._id);
                if (resBill.data.code == 1000) {
                    resBill.data.data.forEach(bill => {
                        // console.log(bill);
                        money += bill.received;
                        set_money_received(money);
                    })
                }
            })

        }

    }
    return (
        <>
            {/* <!-- section dashboard --> */}
            <div className="col s10 offset-s1">

                <div className="row dashboard-row">
                    <div className="col s6">
                        <div>
                            <h4 className="dashboard-title" id="tongquan">Tổng quan</h4>
                        </div>
                        <ul className="dashboard-ul">
                            <li>
                                <span>&bull; Tổng tiền quỹ đã thu: </span><span>{formatMoney(money_received)}</span>
                            </li>
                            <li>
                                <span>&bull; Tổng các khoản thu trong năm: </span><span>{year_total_fees}</span>
                            </li>
                            <li>
                                <span>&bull; Tổng các khoản thu trong tháng {this_month}</span><span>{month_total_fees}</span>
                            </li>
                            <li>
                                <span>&bull; Số khoản thu đã hoàn thành: </span><span>{done_fees}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col s4"></div>
                </div>

                <div className="row listkhoanthu-row">
                    <div className="col s5">
                        <h4 id="dskt">Danh sách các khoản thu</h4>
                    </div>
                    {/* <!-- nút tab khoản thu --> */}
                    <div className="col s4">
                        <ul className="tabs">
                            <li className="tab col s6"><a href="#test1" className="active indigo-text text-accent-3">Chờ
                                xử lý</a></li>
                            <li className="tab col s6"><a className="indigo-text text-accent-3" href="#test2">Đã xử
                                lý</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- input tìm khoản thu --> */}
                    <div className="col s3">
                        <input type="text" placeholder="Tìm khoản thu..." />
                    </div>
                    {/* <!-- tab chờ xử lý --> */}
                    <div id="test1" className="col s12">
                        <table className="table-kt highlight centered">
                            <thead className="card-panel indigo accent-2">
                                <tr className="white-text">
                                    <th>Mã khoản thu</th>
                                    <th>Tên khoản thu</th>
                                    <th>Thời hạn</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {in_process_data.length != 0 ?
                                    in_process_data.map(fee => {
                                        // console.log(fee);
                                        return (
                                            <tr key={in_process_data.indexOf(fee)}>
                                                <td>{fee._id}</td>
                                                <td>{fee.name}</td>
                                                <td>{moment(fee.from).format("L")} - {moment(fee.to).format("L")}</td>
                                                <td>
                                                    <a onClick={() => getDone(fee._id, in_process_data.indexOf(fee))} className="waves-effect waves-light btn green accent-3">Hoàn thành</a>
                                                    <a onClick={() => getDetail(fee._id)} className="waves-effect waves-light btn indigo accent-2">Chi tiết</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    : <tr>
                                        <td >---- Không còn khoản thu đang chờ xử lý ----</td>
                                        {/* <td>null</td>
                                        <td>{fee.name}</td>
                                        <td>{moment(fee.from).format("L")} - {moment(fee.to).format("L")}</td>
                                        <td>
                                            <a onClick={() => getDone(fee._id, in_process_data.indexOf(fee))} className="waves-effect waves-light btn green accent-3">Hoàn thành</a>
                                            <a onClick={() => getDetail(fee._id)} className="waves-effect waves-light btn indigo accent-2">Chi tiết</a>
                                        </td> */}
                                    </tr>
                                }

                            </tbody>
                        </table>
                    </div>
                    {/* <!-- tab đã xử lý --> */}
                    <div id="test2" className="col s12">
                        <table className="table-kt highlight centered">
                            <thead className="card-panel indigo accent-2">
                                <tr className="white-text">
                                    <th>Mã khoảng thu</th>
                                    <th>Tên khoản thu</th>
                                    <th>Thời hạn</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    processed_data.length !== 0 ? processed_data.map(fee => {
                                        return (
                                            <tr>
                                                <td>{fee._id}</td>
                                                <td>{fee.name}</td>
                                                <td>{moment(fee.from).format("L")} - {moment(fee.to).format("L")}</td>
                                                <td>
                                                    <a onClick={() => getDetail(fee._id)} className="waves-effect waves-light btn indigo accent-2">Chi tiết</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                        : <tr>
                                            <td >---- Không có khoản thu nào đã xử lý ----</td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
