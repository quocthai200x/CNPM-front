import React, { useState, useEffect } from "react";
import MemberInfo from "./MemberInfo";
import ModalAddMember from "./ModalAddMember";
import ModalChangeInfo from "./ModalChangeInfo";
import { getHomeInfoAPI } from "../../../apis/info";

function MemberList() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getHomeInfoAPI();
        setMembers(data.data.members);
        setLoading(false);
    };
    const addPersonToList = (person) => {
        // chiỉnh suaâaa list: cu phap es6
        // them person vao liít
        setMembers([...members, person]);
    };

    const updatePersonList = (person) => {
        let index = members.findIndex((member) => member._id === person._id);
        members[index] = person;
        const newData = [...members];
        setMembers(newData);
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
                                data-target="add-member"
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
                        members.map((member) => (
                            <MemberInfo
                                name={member.name}
                                dob={member.dob}
                                gender={
                                    member.gender ? member.gender : "Không có"
                                }
                                idNumber={member.cmnd}
                                key={member._id}
                                id={member._id}
                            />
                        ))
                    )}
                </>
            </table>
            <ModalAddMember addPerson={(person) => addPersonToList(person)} />
            <ModalChangeInfo
                updatePerson={(person) => updatePersonList(person)}
            />
            <br />
        </div>
    );
}

export default MemberList;
