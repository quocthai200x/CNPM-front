import React, { useState, useEffect } from "react";
import "../css/Expediture.css";

import { formatMoney } from "../../../../../../constant/function"
import moment from "moment"
import ImageView from "../../../../../../components/imageView/imageView";

function Detail(props) {
    const [_gifts, set_gifts] = useState([])
    const [_files, set_files] = useState([])
    const [_total_money, set_total_money] = useState(0)
    const [_chosenGifts, set_chosenGifts] = useState([])
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
        set_gifts(props.gifts)
    }, [props.home])

    useEffect(() => {
    
        let total_money = 0;
        _chosenGifts.forEach(gift=>{
            total_money = gift.gifts[0].quantity*gift.gifts[0].price;
        })
        set_total_money(total_money);
    }, [_chosenGifts])

    const verify = () =>{

        if(_chosenGifts.length === _files.length){
            props.verify(_chosenGifts);
        }
    }
    const changeListGift = (gift,id)=>{

        let arr =_chosenGifts;
        let check = true;
        arr.forEach(gift_old=>{
            if(gift_old.id == id){
                gift_old.gifts = [
                    {
                        awardFor: gift.awardFor,
                        name: gift.name,
                        quantity:gift.quantity,
                        price: gift.price,
                    }
                ]
                check = false;
            }
        })
        if(check){
            let obj = {
                id,
                gifts:[
                    {
                        awardFor: gift.awardFor,
                        name: gift.name,
                        quantity:gift.quantity,
                        price: gift.price,
                    }
                ],
                type : 2,
            }
            arr.push(obj);
        }
        set_chosenGifts(arr);
    }
    
    return (
        <li>
            <ImageView></ImageView>
            <div className="collapsible-header padding-off">
                <table className="highlight centered">
                    <tbody>
                        <tr>
                            <td className="col s3">{_home_detail._id}</td>
                            <td className="col s2">{_home_detail.host}</td>
                            <td className="col s3">{_home_detail.address.detail}</td>
                            <td className="col s2">{formatMoney(_total_money)}</td>
                            <td className="col s2">
                                <a class="waves-effect waves-light btn indigo accent-2"
                                 onClick = {()=>{
                                    verify()
                                 }}>
                                    Gửi
                                    </a>
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
                                <td className="col s2 indigo-text text-accent-2">Ngày sinh</td>
                                <td className="col s2 indigo-text text-accent-2">Thành tích</td>
                                <td className="col s2 indigo-text text-accent-2">Minh chứng</td>
                                <td className="col s3 indigo-text text-accent-2">Phần quà</td>

                            </tr>
                        </tbody>
                        {_files.map(file => {
                            return (
                                <tr className="white">
                                    <td className="col s3 indigo-text text-accent-2">{file.person.name}</td>
                                    <td className="col s2 indigo-text text-accent-2">{moment(file.person.dob).format("L")}</td>
                                    <td className="col s2 indigo-text text-accent-2">{file.rank}</td>
                                    <td className="col s2 indigo-text text-accent-2">
                                        <a className="modal-trigger" href="#image-view">
                                            <img id="image-evidence" src={file.image_evidence} style={{ height: "auto", width: "40%" }} />
                                        </a>
                                    </td>
                                    <td className="col s3 indigo-text text-accent-2 input-field">
                                        <select 
                                            onChange = {(e)=>{
                                                changeListGift(JSON.parse(e.target.value),file._id)
                                            }} 
                                            style = {{display:"block"}}>
                                            <option value={JSON.stringify([])} disabled selected>Chọn phần thưởng</option>
                                            {_gifts.map((gift)=>{
                                                return(
                                                    <option value={JSON.stringify(gift)}>{gift.quantity}  {gift.name}</option>

                                                )
                                            })}
                                        </select>
                                       
                                    </td>

                                    <div style={{ borderBottom: "3px solid #e0e0e0" }}></div>
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
