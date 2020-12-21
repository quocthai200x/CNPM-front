import React, { useState, useEffect } from "react";
import "./UserInfo.css";
import { getHomeInfoAPI } from "../../apis/info";

function UserInfo(props) {
    const { id } = props;
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
        <>
            {loading ? (
                <div className="row valign-wrapper">
                    <div className="col s3 valign-wrapper">
                        <h3 className="circle center-align">Loading</h3>
                    </div>
                    <div className="col s7 infomation offset-s1">
                        <h5>Mã hộ: Loading...</h5>
                        <h5>Tên chủ hộ: Loading...</h5>
                        <h5>Số điện thoại liên hệ: Loading...</h5>
                        <h5>Địa chỉ: Loading...</h5>
                        <h5>Số nhân khẩu: Loading...</h5>
                    </div>
                </div>
            ) : (
                <div className="row valign-wrapper">
                    <div className="col s3 valign-wrapper">
                        <h3 className="circle center-align">123</h3>
                    </div>
                    <div className="col s7 infomation offset-s1">
                        <h5>Mã hộ: {data._id}</h5>
                        <h5>Tên chủ hộ: {data.host}</h5>
                        <h5>
                            Số điện thoại liên hệ:{" "}
                            {data.phoneNumber ? data.phoneNumber : "không có"}
                        </h5>
                        <h5>Địa chỉ: {data.address.detail}</h5>
                        <h5>Số nhân khẩu: {data.members.length}</h5>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserInfo;
