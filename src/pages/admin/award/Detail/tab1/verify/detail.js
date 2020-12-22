import React,{useState,useEffect} from "react";
import "../css/Expediture.css";

import { formatMoney } from "../../../../../../constant/function"
import moment from "moment"

function Detail(props) {
    const [_files, set_files] = useState([])
    const [_total_money, set_total_money] = useState(0)
    const [_home_detail, set_home_detail] = useState({
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
            "5fddc6f251423d30f8bb52d1"
        ],
        _id: "5fddc6e451423d30f8bb52d0",
        username: "01234567890",
        host: "ABC ZXYZ",
    })
    useEffect(() => {
        // console.log("XÉT HOME DETAIL");
        // console.log(props.home)
        set_files(props.home);
        set_home_detail(props.home[0].home);
        // console.log("_--------------------_")
        let total_money = 0;
        props.home.forEach(person => {
            person.gifts.forEach(gift => {
                total_money += gift.quantity * gift.price;
            })
        })
        set_total_money(total_money);
    }, [props.home])


    return (
        <li>
            <div className="collapsible-header padding-off">
                <table className="highlight centered">
                    <tbody>
                        <tr>
                            <td className="col s3">{_home_detail._id}</td>
                            <td className="col s2">{_home_detail.host}</td>
                            <td className="col s3">{_home_detail.address.detail}</td>
                            <td className="col s2">{formatMoney(_total_money)}</td>
                            <td className="col s2">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="collapsible-body">
                {/* mô tả phần thưởng */}

                <div>
                    Tổng hồ sơ: {_files.length}
                </div>
                <br />
                <div className="row">
                    <table className="highlight centered">
                        <tbody>
                            <tr className="grey lighten-3">
                                <td className="col s3 indigo-text text-accent-2">Họ tên</td>
                                <td className="col s2 indigo-text text-accent-2">Giới tính</td>
                                <td className="col s3 indigo-text text-accent-2">Ngày sinh</td>
                                <td className="col s2 indigo-text text-accent-2">Quà</td>
                                <td className="col s2 indigo-text text-accent-2">Số lượng</td>

                            </tr>
                        </tbody>
                        {_files.map(file => {
                            return (
                                <tr className="white">
                                    <td className="col s3 indigo-text text-accent-2">{file.person.name}</td>
                                    <td className="col s2 indigo-text text-accent-2">{file.person.gender?file.person.gender:"không có"}</td>
                                    <td className="col s3 indigo-text text-accent-2">{moment(file.person.dob).format("L")}</td>
                                    <td className="col s2 indigo-text text-accent-2">
                                            {file.gifts.length==0?"phần thưởng":file.gifts[0].name}
                                    </td>
                                    <td className="col s2 indigo-text text-accent-2">
                                            {file.gifts.length==0?"phần thưởng":file.gifts[0].quantity}
                                    </td>
                                <div style = {{borderBottom: "3px solid #e0e0e0"}}></div>
                            </tr>
                            )
                        })}
                    </table>
                </div>
                </div>
        </li>

    );
}


export default Detail;
