import React, { useState } from "react";
import "./css/Modal.css";
import { createPersonAPI, addMemberAPI } from "../../../apis/info";
import moment from "moment";
const home_id = "5fddc65e51423d30f8bb52cd";
function ModalAddMember(props) {
    const [_name, set_name] = useState("");
    const [_dob, set_dob] = useState(moment(new Date()).format("L"));
    const [_gender, set_gender] = useState("");
    const [_workAt, set_workAt] = useState("");
    const [_idNumber, set_idNumber] = useState(0);
    const createPerson = async () => {
        const resCreate = await createPersonAPI(
            _name,
            _dob,
            home_id, //homeidok
            _workAt,
            _idNumber,
            _gender
        );
        if (resCreate.data.code == 1000) {
            let list = [];
            list.push(resCreate.data.data._id);
            const resAdd = await addMemberAPI(list, home_id);
            if (resAdd.data.code == 1002) {
                // hoi ngu teo: code update la 1002 :)
                props.addPerson(resCreate.data.data);
            }
            // cai nao chua cai modal nay
            //the nay thoi ay ha
        }
    };

    // chi can id thoi hay cả nhi
    return (
        <>
            {/* Thêm thành viên */}
            <div id="add-member" class="modal">
                <div class="modal-content">
                    <h4>Thêm thông tin thành viên</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <input
                                id="name"
                                type="text"
                                class="validate"
                                value={_name}
                                onChange={(e) => set_name(e.target.value)}
                            />
                            <label for="name">Họ và tên</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input
                                id="dob"
                                type="text"
                                class="datepicker"
                                autoClose
                                value={_dob}
                                onChange={(e) => set_dob(e.target.value)}
                            />
                            <label for="dob">Ngày sinh</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <select
                                value={_gender}
                                onChange={(e) => set_gender(e.target.value)}
                            >
                                <option value="" disabled selected>
                                    Chọn giới tính
                                </option>
                                <option value="nam">Nam</option>
                                <option value="nữ">Nữ</option>
                            </select>
                            <label>Giới tính</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input
                                id="work_at"
                                type="text"
                                class="validate"
                                value={_workAt}
                                onChange={(e) => set_workAt(e.target.value)}
                            />
                            <label for="work_at">Nơi làm việc</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input
                                id="id-number"
                                type="number"
                                class="validate"
                                value={_idNumber}
                                onChange={(e) => set_idNumber(e.target.value)}
                            />
                            <label for="id-number">Số CMT</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a
                        class="modal-close waves-effect waves-light indigo accent-3 white-text btn-small button-1"
                        onClick={() => createPerson()}
                    >
                        Thêm
                    </a>
                </div>
            </div>
        </>
    );
}

export default ModalAddMember;
