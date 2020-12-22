import React, { useEffect, useState } from 'react'
import { getAllAwardAPI, getAwardDetailsAPI,getAwardDoneAPI } from "../../../../apis/award"
import { formatMoney } from "../../../../constant/function"
import moment from "moment"
import { getFeeDoneAPI } from '../../../../apis/fee'

const month = new Date().getMonth()
const year = new Date().getFullYear()
function DashBoard(props) {
    const [_total_awards, set_total_awards] = useState(0);
    const [_total_month, set_total_month] = useState(0)
    const [_total_year, set_total_year] = useState(0)
    const [_awardList, set_awardList] = useState([])
    const [_doneList, set_doneList] = useState([])

    useEffect(() => {
        getAllAward()
    }, [])
    const getDetail = (award_id) => {
        props.getDetail(award_id);
    }
    const getDone = async (award_id, type, index) => {
        const res= await getAwardDoneAPI(award_id,type);
        console.log(res)
        if(res.data.code == 1000){
            // console.log(res.data.data);
            // sau khi gọi done api, nếu thành công sẽ trả về 1 cái fee giống khung => chỉ việc áp lại vào bên processed_data
            // và sau đó xóa cái ở in_process_data 
            // sau đó phải cập nhật lại thông số trên dashboard số khoản thu xong
            let new_in_process_data = _awardList.filter(e => {
                return _awardList.indexOf(e) != index
            });
            set_doneList(_doneList.concat(_awardList[index]))
            set_awardList(new_in_process_data);
            // set_done_fees(done_fees + 1);
        }
        else{
            // TODO: nếu không thành công sẽ tạo 1 thông báo không thành công
            // console.log(res.data)
        }
    }

    const getAllAward = async () => {
        const resAllAward = await getAllAwardAPI();
        if (resAllAward.data.code == 1000) {
            let data = resAllAward.data.data;
            let total_money_year = 0;
            let total_money_month = 0;
            set_total_awards(data.length);
            let not_done_list = data.filter(award => {return award.isDone == false});
            let done_list = data.filter(award => {return award.isDone == true});
            set_awardList(not_done_list);
            set_doneList(done_list);
            data.forEach(async (award) => {
                const resDetail = await getAwardDetailsAPI(award._id, award.type);
                if (resDetail.data.code == 1000) {
                    resDetail.data.data.forEach(detail => {
                        if (detail.gifts.length != 0) {
                            // console.log(detail);
                        }
                        detail.gifts.forEach(gift => {
                            if (new Date(award.from).getFullYear() <= year && year <= new Date(award.to).getFullYear()) {
                                total_money_year += gift.price * gift.quantity;
                            }
                            if (new Date(award.from).getMonth() <= month && month <= new Date(award.to).getMonth()) {
                                total_money_month += gift.price * gift.quantity;
                            }
                        })
                        set_total_month(_total_month + total_money_month);
                        set_total_year(_total_year + total_money_year);
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
                                <span>&bull; Tổng số đợt thưởng trong năm: </span><span>{_total_awards}</span>
                            </li>
                            <li>
                                <span>&bull; Tổng tiền chi trong năm {year}:</span><span>{formatMoney(_total_year)}</span>
                            </li>
                            <li>
                                <span>&bull; Tổng tiền chi trong tháng {month + 1}: </span><span>{formatMoney(_total_month)}</span>
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
                                {_awardList.map((award) => {
                                    // console.log(award)
                                    return (
                                        <tr>
                                            <td>{award._id}</td>
                                            <td>{award.name}</td>
                                            <td>{moment(award.from).format("L")}-{moment(award.to).format("L")}</td>
                                            <td>
                                                <a  onClick = {()=>getDone(award._id,award.type,_awardList.indexOf(award))}
                                                    className="waves-effect waves-light btn green accent-3">Hoàn thành</a>
                                                <a onClick={() => getDetail(award._id)} className="waves-effect waves-light btn indigo accent-2">Chi tiết</a>
                                            </td>
                                        </tr>
                                    )
                                })
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
                                {_doneList.map((award) => {
                                        // console.log(award)
                                        return (
                                            <tr>
                                                <td>{award._id}</td>
                                                <td>{award.name}</td>
                                                <td>{moment(award.from).format("L")}-{moment(award.to).format("L")}</td>
                                                <td>
                                                    <a onClick={() => getDetail(award._id)} className="waves-effect waves-light btn indigo accent-2">Chi tiết</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}


export default DashBoard
