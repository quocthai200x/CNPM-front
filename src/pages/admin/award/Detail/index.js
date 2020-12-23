import React, { useEffect, useState } from 'react'
import "./index.css"

import { formatMoney } from "../../../../constant/function"
import moment from "moment"
import { getAllAwardAPI, getAwardDetailsAPI } from '../../../../apis/award'
import TabContainer from './tab1/TabContainer'
import TabContainer2 from './tab2/TabContainer2'
import ImageView from '../../../../components/imageView/imageView'


function Detail(props) {
    const [award, setAward] = useState({
        created_at: "2020-12-21T15:01:04.452Z",
        description: "Quà mẫu",
        from: "2020-12-01T00:00:00.000Z",
        gifts: [
            {
                awardFor: "Quà mẫu",
                name: "Quà mẫu",
                price: 1000,
                quantity: 12,
            }, {
                awardFor: "Quà mẫu",
                name: "Quà mẫu",
                price: 1000,
                quantity: 12,
            }
        ],
        isDone: false,
        name: "Quà mẫu",
        to: "2021-01-01T00:00:00.000Z",
        type: 2,
        _id: "ID mẫu"
    });
    const [_rewarded, set_rewarded] = useState([]);
    const [_not_rewarded, set_not_rewarded] = useState([]);
    const [_waiting_list, set_waiting_list] = useState([]);

    const [_total_money, set_total_money] = useState(0)
    const [_total_person, set_total_person] = useState(0)
    const [_completed_person, set_completed_person] = useState(0)
    const [_home_go, set_home_go] = useState(0)
    const [_home_done, set_home_done] = useState(0)

    useEffect(() => {
        getData();
        // const script = document.createElement("script");
        // script.src = "./tab.js";
        // script.async = true;
        // document.body.appendChild(script);
        
    }, [props.award_id])



    const getData = async () => {
        const resAward = await getAllAwardAPI(props.award_id);
        if (resAward.data.code == 1000) {
            const resDetails = await getAwardDetailsAPI(props.award_id, resAward.data.data.type);
            if (resDetails.data.code == 1000) {
                let  type = resAward.data.data.type;
                setAward(resAward.data.data);
                let data = resDetails.data.data;
                let awarded = [];
                let not_awarded = [];
                let waiting = [];
                let _1home_nPerson_awarded = [];
                let _1home_nPerson_not_awarded = [];
                let _1home_nPerson_waiting = [];
                let total_money = 0;
                let person = 0;
                let completed_person = 0;
                let home_go = 0;
                let home_done = 0;
                // console.log(data);
                let h = "";
                let H_done_ = [];
                data.forEach(reward => {
                    // nếu chuyển xét qua nhà khác
                    if (h != reward.home._id) {
                        // khác nhà thì push mảng lên và reset
                        if (_1home_nPerson_not_awarded.length != 0) {
                            not_awarded.push(_1home_nPerson_not_awarded)
                        }
                        if (_1home_nPerson_awarded.length != 0) {
                            awarded.push(_1home_nPerson_awarded)
                        }
                        if (type == 2) {
                            if (_1home_nPerson_waiting != 0) {
                                waiting.push(_1home_nPerson_waiting);
                            }
                            _1home_nPerson_waiting = [];
                        }
                        _1home_nPerson_awarded = [];
                        _1home_nPerson_not_awarded = [];

                        // nếu nhà cũ đã nhận đủ
                        if (!H_done_.includes(false) && H_done_.length != 0) {
                            // nhà nhận ++, xét lại mảng duyệt chứa nhà nhận đủ
                            home_done++;
                            H_done_ = [];
                        }
                        // nhà phải đi
                        home_go++;
                        // xét lại rằng là đã thành nhà khác
                        h = reward.home._id;
                    }
                    // đếm tiền 
                    reward.gifts.forEach(gift => {
                        total_money += gift.quantity * gift.price;
                    })
                    // đếm đơn đã giao
                    if (reward.isAwarded) {
                        completed_person++;
                    }
                    // đếm đơn cần giao
                    person++;


                    //  push mảng của 1 nhà xem nhận đủ chưa
                    if (h == reward.home._id) {
                        // xét chia 2 tab
                        if (type == 1) {
                            if (reward.isAwarded) {
                                _1home_nPerson_awarded.push(reward)
                            }
                            else if(!reward.isAwarded){
                                _1home_nPerson_not_awarded.push(reward)
                            }
                        } else if (type == 2) {
                            if (!reward.isAwarded && !reward.image_evidence && !reward.rank) {
                                _1home_nPerson_not_awarded.push(reward);
                            }
                            else if (!reward.isAwarded && reward.image_evidence && reward.rank) {
                                _1home_nPerson_waiting.push(reward);
                            } else if (reward.isAwarded) {
                                _1home_nPerson_awarded.push(reward)
                            }
                        }

                        H_done_.push(reward.isAwarded)
                    }
                })
                // Thêm phát cuối vì ngoài vòng ForEach
                if (_1home_nPerson_not_awarded.length != 0) {
                    not_awarded.push(_1home_nPerson_not_awarded)
                }
                if (_1home_nPerson_awarded.length != 0) {
                    awarded.push(_1home_nPerson_awarded)
                }
                if (type == 2) {
                    if (_1home_nPerson_waiting != 0) {
                        waiting.push(_1home_nPerson_waiting);
                    }
                }
                if (!H_done_.includes(false) && H_done_.length != 0) {
                    // nhà nhận ++, xét lại mảng duyệt chứa nhà nhận đủ
                    home_done++;
                    
                }
                // console.log(awarded);
                // console.log(not_awarded);
                set_not_rewarded(not_awarded);
                set_rewarded(awarded);
                set_waiting_list(waiting);
                set_total_money(total_money);
                set_total_person(person);
                set_completed_person(completed_person);
                set_home_go(home_go);
                set_home_done(home_done)
            }
        }
    }

    // console.log("AWareded" + _rewarded);
    // console.log("_NOT" + _not_rewarded[0]);
    const updateInfo = (list) =>{
        let total_money = 0;
        let completed_person = 0;
        list.forEach(gift=>{
            total_money+= gift.gifts[0].price*gift.gifts[0].quantity;
            completed_person++;
        })
        set_total_money(_total_money+ total_money);
        set_completed_person(_completed_person + completed_person);
        set_home_done(_home_done + 1);

    }
    return (
        <>
        <ImageView></ImageView>
        <div class="col s10 offset-s1">
            {/* <!-- title --> */}
            <div class="row list-bill-row">
                <div class="col s5">
                    <h4 id="ctkt">{award.name}</h4>
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
                                <th class="col s3">Mã phần thưởng</th>
                                <th class="col s3">Tên phần thưởng</th>
                                <th class="col s3">Minh chứng</th>
                                <th class="col s3">Thời gian</th>
                            </tr>
                        </thead>
                    </table>
                    {/* {fee.created_at? */}
                    <ul class="collapsible popout">
                        <li>
                            <div class="collapsible-header padding-off">
                                <table class="highlight centered">
                                    <tbody>
                                        <tr>
                                            <td class="col s3">{award._id}</td>
                                            <td class="col s3">{award.name}</td>
                                            <td class="col s3">{award.type == 1 ? "Không" : "Có"}</td>
                                            <td class="col s3">{moment(award.from).format("L")}-{moment(award.to).format("L")}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="collapsible-body">
                                <div class="row">
                                    <div class="col s9">
                                        <div>
                                            <div class="detail-gift__title  indigo-text text-accent-2">Mô tả</div>
                                            <span>
                                                {award.description}
                                            </span>
                                        </div>
                                        <div>
                                            <div class="detail-gift__title  indigo-text text-accent-2">Phần thưởng</div>
                                            <div class="row">
                                                <table
                                                    class="col s11 highlight gift-list"
                                                    style={{ padding: 0 }}
                                                >
                                                    {award.gifts.map((gift) => {
                                                        return (
                                                            <tr className="white row-gift  indigo-text text-accent-2">
                                                                <td class="col s4">{gift.awardFor}</td>
                                                                <td class="col s4">{gift.quantity} {gift.name}</td>
                                                                <td class="col s4">{formatMoney(gift.quantity * gift.price)}</td>

                                                            </tr>
                                                        )
                                                    })}
                                                </table>
                                            </div>

                                            <div>
                                                <div class="detail-gift__title  indigo-text text-accent-2">Loại</div>
                                                <div>{award.type == 1 ? "Không cần minh chứng" : "Cần minh chứng"} </div>
                                            </div>
                                        </div>
                                    </div>

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
                            <span>&bull; Tổng số tiền phải chi </span><span>{formatMoney(_total_money)}</span>
                        </li>
                        <li>
                            <span>&bull; Tổng số cháu phải phát</span><span>{_total_person}</span>
                        </li>
                        <li>
                            <span>&bull; Số cháu đã phát </span><span>{_completed_person}</span>
                        </li>
                        <li>
                            <span>&bull; Số hộ phải đi </span><span>{_home_go}</span>
                        </li>
                        <li>
                            <span>&bull; Số hộ đã hoàn thành </span><span>{_home_done}</span>
                        </li>
                    </ul>
                </div>
                <div class="col s4"></div>
            </div>
            {/* <!-- bảng các hộ --> */}
            {award.type == 1?
                <TabContainer type = {award.type} not_award = {_not_rewarded} award = {_rewarded}></TabContainer>
                :
                <TabContainer2 updateInfo= {(list)=>updateInfo(list)} gifts = {award.gifts} type = {award.type} waiting = {_waiting_list} not_award = {_not_rewarded} award = {_rewarded}></TabContainer2>
                
                }
           
        </div>
        </>
    )
}

export default Detail
