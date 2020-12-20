import React, { useEffect,useState } from 'react'
import {getAllFeeAPI,getAllFeeBillAPI} from "../../../apis/fee/index"
import "./index.css"


const this_month =  new Date(Date.now()).getMonth() + 1;
function Dashboard() {
    const [year_total_fees,set_year_total_fees] = useState(0);
    const [month_total_fees,set_month_total_fees] = useState(0);
    const [done_fees,set_done_fees] = useState(0);
    const [money_received, set_money_received] = useState(0);
    const getDetail = (id) =>{
        console.log("---Get detail---")
    } 
    const getDone = (id) =>{
        console.log("---Get Done---");
    }

    useEffect(()=>{
        getAllFee()
    },[])

    const getAllFee = async () =>{
        const res = await getAllFeeAPI();
        if(res.data.code == 1000){
            console.log(res.data.data);
            let money = 0;
            let in_year = 0;
            let in_month = 0;
            let done = 0;
            let now = Date.now();
            let month = new Date(now).getMonth();
            let year = new Date(now).getFullYear();
            res.data.data.listFee.forEach( fee => {
                // tính tổng khoản thu trong năm
                if(new Date(fee.from).getFullYear()<= year && year <= new Date(fee.to).getFullYear()){
                    in_year++;
                }
                if( new Date(fee.from).getMonth()<= month && month <= new Date(fee.to).getMonth()){
                    in_month++;
                }
                if(fee.isDone){
                    done++;
                }

            });

            res.data.data.listFee.forEach(async (fee)=>{
                const resBill = await  getAllFeeBillAPI(null,fee._id);
                if(resBill.data.code == 1000){
                    resBill.data.data.forEach(bill=>{
                        console.log("BILL "+ bill.received)
                        money += bill.received;
                    })
                }
            })
            console.log(money);
            set_done_fees(done);
            set_money_received(money);
            set_month_total_fees(in_month);
            set_year_total_fees(in_year);
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
                                <span>&bull; Tổng tiền quỹ đã thu: </span><span>{money_received}</span>
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
                                <tr>
                                    <td>KT-sdfwcd654</td>
                                    <td>Thu tiền vệ sinh tháng 10</td>
                                    <td>30/10/2020</td>
                                    <td>
                                        <a  onClick = {()=>getDone()}className="waves-effect waves-light btn green accent-3">Hoàn thành</a>
                                        <a  onClick = {()=>getDetail()}className="waves-effect waves-light btn indigo accent-2">Chi tiết</a>
                                    </td>
                                </tr>
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
                                <tr>
                                    <td>KT-sdfwcd654</td>
                                    <td>Thu tiền vệ sinh tháng 10</td>
                                    <td>30/10/2020</td>
                                    <td>
                                        <a onClick = {()=>getDetail()} className="waves-effect waves-light btn indigo accent-2">Chi tiết</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
