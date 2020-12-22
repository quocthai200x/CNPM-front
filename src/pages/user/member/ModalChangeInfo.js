import React, { useState } from "react";
import moment from "moment";
import "./css/Modal.css";
import { updatePersonAPI } from "../../../apis/info";

const id = "5fddc67151423d30f8bb52ce";
function ModalChangeInfo() {
    const [_name, set_name] = useState("");
    const [_dob, set_dob] = useState(moment(new Date()).format("L"));
    const [_gender, set_gender] = useState("");
    const [_workAt, set_workAt] = useState("");
    const [_idNumber, set_idNumber] = useState(0);
    const updatePerson = () => {
        updatePersonAPI(_name, _dob, id, _idNumber, _workAt, _gender);
    };

    return (
        <div id="edit-info" class="modal">
            <div class="modal-content">
                <h4>Sửa thông tin thành viên</h4>
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
                            id="dof"
                            type="text"
                            class="datepicker"
                            value={_dob}
                            onChange={(e) => set_dob(e.target.value)}
                        />
                        <label for="dof">Ngày sinh</label>
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
                    onClick={() => updatePerson()}
                >
                    Cập nhật
                </a>
            </div>
        </div>
    );
}

export default ModalChangeInfo;
