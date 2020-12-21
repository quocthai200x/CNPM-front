import React, { useState } from "react";
import "./index.css";
import moment from "moment"
import { createFeeAPI } from "../../apis/fee/index"
function Modal(props) {
    const [_name, set_name] = useState("");
    const [_description, set_description] = useState("")
    const [_type, set_type] = useState("1");
    const [_price, set_price] = useState(0);
    const [_from, set_from] = useState(moment(new Date()).format("L"));
    const [_to, set_to] = useState(moment(new Date()).add(1,'days').format("L"));
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
                        <label for="name">Tên khoản thu</label>
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
                            <input id="from" type="text" className="datepicker " autoClose
                                value = {_from} onChange = {(e)=>set_from(e.target.value)}
                            />
                        <label for="from">Từ</label>
                    </div>
                    <div className="input-field col s6">
                            <input id="to" type="text" className="datepicker" autoClose
                                value = {_to} onChange = {(e)=>set_to(e.target.value)}
                            />
                        <label for="to">Đến</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    onClick = {()=>createFee()}
                    // href="#!" className="modal-close waves-effect waves-green btn-flat"
                    >Tạo</a>
            </div>
        </div>
    )
}


export default Modal;
