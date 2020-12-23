import React, { useState, useEffect } from "react";
import "./css/RewardDetail.css";
import moment from "moment";
import {getAwardDetailsAPI}  from "../../../../apis/award/";
const home_id = "5fddc65e51423d30f8bb52cd";

function RewardDetail(props) {
    const { id, name, type, isDone, from, to, description, gifts } = props;
    const [childList, set_childList] = useState([]);
    useEffect(() => {
        getChildList();
    }, []);

    const getChildList = async () => {
        const res = await getAwardDetailsAPI(id, type, home_id);
        console.log(res.data.data);
        set_childList(res.data.data);
    };

    return (
        <li>
            <div class="collapsible-header padding-off">
                <table class="highlight centered">
                    <tbody>
                        <tr>
                            <td class="col s2">{id}</td>
                            <td class="col s3">{name}</td>
                            <td class="col s2">
                                {type === 1 ? "Không" : "Có"}
                            </td>
                            <td class="col s3">
                                {moment(from).format("L")}-
                                {moment(to).format("L")}
                            </td>
                            <td class="col s2 orange-text text-lighten-2">
                                {isDone ? "Đã xử lý" : "Đang xử lý"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="collapsible-body">
                <div class="row">
                    <div class="col s9">
                        <div>
                            <div class="detail-gift__title">Mô tả</div>
                            <span>{description}</span>
                        </div>
                        <div>
                            <div class="detail-gift__title">Phần thưởng</div>
                            <div class="row">
                                <table
                                    class="col s6 highlight gift-list"
                                    style={{ padding: 0 }}
                                >
                                    {gifts.map((gift) => (
                                        <tr>
                                            <td class="col s6">
                                                {gift.awardFor}
                                            </td>
                                            <td class="col s6">
                                                {gift.quantity} {gift.name}
                                            </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>

                            <div>
                                <div class="detail-gift__title">Hồ sơ</div>
                                <div class="verifile-list">
                                    <div class="row">
                                        <div class="col s3">
                                            <div class="card-panel card-file">
                                                <a class="red accent-2 center-align remove-icon">
                                                    <i class="material-icons white-text">
                                                        remove
                                                    </i>
                                                </a>
                                                <span>
                                                    I am a very simple card
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col s3">
                                            <div class="card-panel card-file">
                                                <a class="red accent-2 center-align remove-icon">
                                                    <i class="material-icons white-text">
                                                        remove
                                                    </i>
                                                </a>
                                                <span>
                                                    I am a very simple card
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>Danh sách các cháu</div>
                                <div>
                                    {childList.map((child) => (
                                        <div class="row">
                                            <div class="col s9">
                                                <div>
                                                    Tên: {child.person.name}
                                                </div>
                                            </div>
                                            <div class="col s3 right-align">
                                                <button
                                                    data-target="add-proof"
                                                    class="button-1 waves-effect waves-light indigo accent-3 white-text btn-small modal-trigger"
                                                >
                                                    Thêm hồ sơ
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s3 right-align">
                        {type === 1 ? (
                            <></>
                        ) : (
                            <button
                                data-target="add-proof"
                                class="button-1 waves-effect waves-light indigo accent-3 white-text btn-small modal-trigger"
                            >
                                Thêm hồ sơ
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default RewardDetail;
