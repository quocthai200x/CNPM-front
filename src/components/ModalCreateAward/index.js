import React, { useState } from "react";
import "./index.css";
import moment from "moment"
import { createAwardAPI } from "../../apis/award";

function Modal(props) {
    const [_name, set_name] = useState("");
    const [_description, set_description] = useState("")
    const [_type, set_type] = useState("1");
    const [_name_gift, set_name_gift] = useState("");
    const [_award_for, set_award_for] = useState("");
    const [_quantity, set_quantity] = useState(0);
    const [_price, set_price] = useState(0)
    const [_from, set_from] = useState(moment(new Date()).format("L"));
    const [_to, set_to] = useState(moment(new Date()).add(1, 'days').format("L"));

    const [_gifts, set_gifts] = useState([]);
    const createAward = async () => {
        const res= await createAwardAPI(_name,_type,_gifts,_from,_to,_description);
        console.log(res);
        if(res.data.code == 1000){
            console.log(res.data.data);
            props.created(res.data.data);
        }
    }
    const addGiftToList = () => {
        let gift = {
            awardFor: _award_for,
            quantity: _quantity,
            price: _price,
            name: _name_gift
        }
        set_gifts([..._gifts, gift]);
    }
    const deleteGift = (index) => {
        let new_data = _gifts.filter(gift => {
            return _gifts.indexOf(gift) != index;
        })
        set_gifts(new_data);
    }
    return (
        <div id="add-award" className="modal">
            <div className="modal-content">
                <h4>Tạo mới phần thưởng</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" type="text" className="validate"
                            value={_name} onChange={(e) => set_name(e.target.value)}
                        />
                        <label for="name" >Tên phần thưởng</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="description" type="text" className="validate"
                            value={_description} onChange={(e) => set_description(e.target.value)}
                        />
                        <label for="description">Mô tả</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select onChange={(e) => set_type(e.target.value)} value={_type}>
                            <option value="1">không cần minh chứng</option>
                            <option value="2">cần minh chứng</option>
                        </select>
                        <label>Loại</label>
                    </div>

                </div>
                <div className="row">
                    <div className="input-field col s4">
                        <input id="award-for" type="text" className="validate"
                            value={_award_for} onChange={(e) => set_award_for(e.target.value)}
                        />
                        <label for="award-for">Cho</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="name-gift" type="text" className="validate"
                            value={_name_gift} onChange={(e) => set_name_gift(e.target.value)}
                        />
                        <label for="name-gift">Quà</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="money" type="number" className="validate"
                            value={_price} onChange={(e) => set_price(e.target.value)}
                        />
                        <label for="money">Tiền quà (của 1 món)</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="quantity" type="number" className="validate"
                            value={_quantity} onChange={(e) => set_quantity(e.target.value)}
                        />
                        <label for="quantity">Số lượng</label>
                    </div>
                </div>
                <div className="row">
                    <a
                        onClick={() => addGiftToList()}
                        className="col s1 button white-text indigo accent-2 waves-effect waves-green btn-flat"
                    >Thêm</a>
                </div>

                <div className="row valign-wrapper">
                    {_gifts.map((gift => {
                        return (
                            <span style={{ padding: 10, margin: 4, borderRadius: 10 }} className="indigo accent-2">
                                <span  className="white-text">
                                    {gift.awardFor+"                      "}
                                    <i onClick = {()=>deleteGift(_gifts.indexOf(gift))} className="icon-backspace red-text tiny material-icons">backspace</i>
                                </span>
                                
                            </span>
                        )
                    }))}
                </div>


                <div className="row">
                    <div className="input-field col s6">
                        <input id="from" type="text" className="datepicker " autoClose
                            value={_from} onChange={(e) => set_from(e.target.value)}
                        />
                        <label for="from">Từ</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="to" type="text" className="datepicker" autoClose
                            value={_to} onChange={(e) => set_to(e.target.value)}
                        />
                        <label for="to">Đến</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    onClick={() => createAward()}
                    href="#!" className="button white-text indigo accent-2  modal-close waves-effect waves-green btn-flat"
                >Tạo</a>
            </div>
        </div>
    )
}


export default Modal;
