import React from "react";
import "./UserInfo.css";

function UserInfo(props) {
    const { id, name, phone, address, totalPerson, totalChild } = props;

    return (
        <div className="row valign-wrapper">
            <div className="col s3 valign-wrapper">
                <h3 className="circle center-align">123</h3>
            </div>
            <div className="col s7 infomation offset-s1">
                <h5>Mã hộ: {id}</h5>
                <h5>Tên chủ hộ: {name}</h5>
                <h5>Số điện thoại liên hệ: {phone}</h5>
                <h5>Địa chỉ: {address}</h5>
                <h5>Số nhân khẩu: {totalPerson}</h5>
                <h5>Số trẻ em: {totalChild}</h5>
            </div>
        </div>
    );
}

export default UserInfo;
