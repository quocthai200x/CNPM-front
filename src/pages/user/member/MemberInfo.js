import React from "react";
import moment from "moment";

function MemberInfo(props) {
    const { name, dob, gender, idNumber } = props;

    return (
        <>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{moment(dob).format("L")}</td>
                    <td>{gender}</td>
                    <td>{idNumber}</td>
                    <td>
                        <button
                            data-target="edit-info"
                            class="button-1 waves-effect waves-light indigo accent-3 white-text btn-small modal-trigger"
                        >
                            Sửa
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    );
}

export default MemberInfo;
