import React, { useState, useEffect } from "react";
import MemberInfo from "./MemberInfo";
import Modal from "./Modal";
import { getHomeInfoAPI } from "../../../apis/info";

function MemberList() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getHomeInfoAPI();
        setData(data.data);
        setLoading(false);
    };
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
                <>
                    {loading ? (
                        <MemberInfo
                            name="Loading"
                            dob="Loading"
                            gender="Loading"
                            idNumber="Loading"
                        />
                    ) : (
                        data.members.map((member) => (
                            <MemberInfo
                                name={member.name}
                                dob={member.dob}
                                gender={
                                    member.gender ? member.gender : "Không có"
                                }
                                idNumber={member.cmnd}
                                key={member._id}
                            />
                        ))
                    )}
                </>
            </table>
            <Modal />
            <br />
        </div>
    );
}

export default MemberList;
