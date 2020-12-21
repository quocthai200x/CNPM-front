import React from "react";
import "./css/Modal.css";

function Modal() {
    return (
        <>
            {/* Thêm thành viên */}
            <div id="add-info" class="modal">
                <div class="modal-content">
                    <h4>Thêm thông tin thành viên</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text" class="validate" />
                            <label for="name">Họ và tên</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="dof" type="date" class="validate" />
                            <label for="dof">Ngày sinh</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <select>
                                <option value="" disabled selected>
                                    Chọn giới tính
                                </option>
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                            </select>
                            <label>Giới tính</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input
                                id="id-number"
                                type="number"
                                class="validate"
                            />
                            <label for="id-number">Số CMT</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a
                        href="#!"
                        class="modal-close waves-effect waves-light indigo accent-3 white-text btn-small button-1"
                    >
                        Thêm
                    </a>
                </div>
            </div>
            {/*=========================*/}

            {/* Sửa thông tin thành viên */}
            <div id="edit-info" class="modal">
                <div class="modal-content">
                    <h4>Sửa thông tin thành viên</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text" class="validate" />
                            <label for="name">Họ và tên</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="dof" type="date" class="validate" />
                            <label for="dof">Ngày sinh</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <select>
                                <option value="" disabled selected>
                                    Chọn giới tính
                                </option>
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                            </select>
                            <label>Giới tính</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input
                                id="id-number"
                                type="number"
                                class="validate"
                            />
                            <label for="id-number">Số CMT</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a
                        href="#!"
                        class="modal-close waves-effect waves-light indigo accent-3 white-text btn-small button-1"
                    >
                        Cập nhật
                    </a>
                </div>
            </div>
            {/* ======================== */}
            {/* Thêm minh chứng */}

            <div id="add-proof" class="modal">
                <div class="modal-content">
                    <h4>Thêm hồ sơ nhận phần thưởng</h4>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text" class="validate" />
                            <label for="name">Họ và tên</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input
                                id="achievement"
                                type="text"
                                class="validate"
                            />
                            <label for="achievement">Thành tích</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="proof" type="text" class="validate" />
                            <label for="proof">URL minh chứng</label>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a
                        href="#!"
                        class="modal-close waves-effect waves-light indigo accent-3 white-text btn-small button-1"
                    >
                        Thêm
                    </a>
                </div>
            </div>

            {/* ======================== */}
        </>
    );
}

export default Modal;
