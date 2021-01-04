import React, { useState } from "react";
import "./index.css";

import { createFeeAPI } from "../../apis/fee/index"

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function Modal(props) {
    const [_name, set_name] = useState("");
    const [_description, set_description] = useState("")
    const [_type, set_type] = useState("1");
    const [_price, set_price] = useState(0);
    const [_from, set_from] = useState(new Date());
    const [_to, set_to] = useState(new Date());
    const [_isRequired, set_isRequired] = useState(false);
    const createFee = async () =>{
        const res= await createFeeAPI(_name,_type,_price,_from,_to,_isRequired,_description);
        if(res.data.code == 1000){
            props.created(res.data.data);
        }
    }
    return (
        <div id="add-fee" className="modal">
            <div className="modal-content">
                <h4>Tạo mới khoản thu</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" type="text" className="validate" 
                            value = {_name} onChange = {(e)=>set_name(e.target.value)}
                        />
                        <label for="name" >Tên khoản thu</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="description" type="text" className="validate" 
                            value = {_description} onChange = {(e)=>set_description(e.target.value)}
                        />
                        <label for="description">Mô tả</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select onChange = {(e)=>set_type(e.target.value)} value = {_type}>
                            <option value="1">theo hộ</option>
                            <option value="2">theo nhân khẩu</option>
                        </select>
                        <label>Loại</label>
                    </div>

                    <div className="input-field col s6">
                        <select onChange = {(e)=>set_isRequired(e.target.value)} value = {_isRequired}>
                            <option value={true}>bắt buộc</option>
                            <option value={false} >tự nguyện</option>
                        </select>
                        <label>Yêu cầu</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="money" type="number" className="validate"
                            value = {_price} onChange = {(e)=>set_price(e.target.value)}
                        />
                        <label for="money">Số tiền nộp mỗi hộ</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <label for="from">Từ</label>
                        <DatePicker id = "from" selected={_from} onChange={date => {console.log(date);set_from(date)} }/>
          
                    </div>
                    <div className="col s6">
                        <label for="to">Đến</label>
                        <DatePicker id = "to" selected={_to} onChange={date => set_to(date)} />
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    onClick = {()=>createFee()}
                    href="#!" className="button white-text indigo accent-2  modal-close waves-effect waves-green btn-flat"
                >Tạo</a>
            </div>
        </div>
    )
}


export default Modal;
