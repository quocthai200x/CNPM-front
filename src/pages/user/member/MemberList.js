import React from "react";
import MemberInfo from "./MemberInfo";
import Modal from "./Modal";

function MemberList() {
    return (
        <div>
            <table class="highlight centered">
                <thead class="card-panel indigo accent-2">
                    <tr class="white-text">
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Số CMT</th>
                        <th>
                            <button
                                data-target="add-info"
                                class="waves-effect waves-dark btn-small white black-text modal-trigger"
                            >
                                Thêm thành viên
                            </button>
                        </th>
                    </tr>
                </thead>

                <MemberInfo
                    name="Phan Đức Trọng"
                    dof="03/05/2000"
                    gender="Nam"
                    idNumber="0213456789"
                />
                <MemberInfo
                    name="Trọng Đức Phan"
                    dof="03/05/2001"
                    gender="Nam"
                    idNumber="0213456789"
                />
            </table>
            <Modal />
            <br />
        </div>
    );
}

export default MemberList;
