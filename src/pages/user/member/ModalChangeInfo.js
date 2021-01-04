import React, { useState } from "react";

import "./css/Modal.css";
import { updatePersonAPI } from "../../../apis/info";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
function ModalChangeInfo(props) {
    const [_name, set_name] = useState("");
    const [_dob, set_dob] = useState(new Date());
    const [_gender, set_gender] = useState("");
    const [_workAt, set_workAt] = useState("");
    const [_idNumber, set_idNumber] = useState(0);

    const update = async () => {
        let personId = document
            .getElementById("person-id")
            .getAttribute("value");
        const res = await updatePersonAPI(
            _name,
            _dob,
            personId,
            _idNumber,
            _workAt,
            _gender
        );
        if (res.data.code === 1002) {
            props.updatePerson(res.data.data);
        }
    };

    return (
        <>
            <div id="edit-info" class="modal update-info">
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
                                required
                            />
                            <label for="name">Họ và tên</label>
                        </div>
                    </div>
                    <div class="row">
                    <div className="col s12 left-align">
                        <label for="dob">Ngày sinh</label>
                        <DatePicker id = "dob" selected={_dob} onChange={date => set_dob(date)} />
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
                        onClick={() => update()}
                    >
                        Cập nhật
                    </a>
                </div>
            </div>
        </>
    );
}

export default ModalChangeInfo;
