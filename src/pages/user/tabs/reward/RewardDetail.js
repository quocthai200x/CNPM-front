import React, { useState, useEffect } from "react";
import "./css/RewardDetail.css";
import moment from "moment";
import { getAwardDetailAPI } from "../../../../apis/award/";
import "./ModalUpload";
import ModalUpload from "./ModalUpload";

const home_id = "5fddc65e51423d30f8bb52cd";

function RewardDetail(props) {
    const { id, name, type, isDone, from, to, description, gifts } = props;
    const [childList, set_childList] = useState([]);
    const [award_id, set_awardId] = useState("");

    const getChildList = async () => {
        const res = await getAwardDetailAPI(id, type, home_id);
        set_childList(res.data.data);
    };

    useEffect(() => {
        getChildList();
    }, []);

    useEffect(() => {
        console.log(award_id);
    }, [award_id]);

    return (
        <>
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
                                {isDone ? (
                                    <td class="col s2 green-text text-lighten-1">
                                        Đã xử lý
                                    </td>
                                ) : (
                                    <td class="col s2 orange-text text-lighten-1">
                                        Đang xử lý
                                    </td>
                                )}
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
                                <div class="detail-gift__title">
                                    Phần thưởng
                                </div>
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
                                    <div class="detail-gift__title">
                                        Danh sách nhận thưởng
                                    </div>
                                    <div class="verifile-list">
                                        {childList.map((child) => (
                                            <div class="row">
                                                <div class="col s6 card-panel card-file">
                                                    <div>
                                                        Mã nhân khẩu:{" "}
                                                        {child.person._id}
                                                    </div>
                                                    <div>
                                                        Họ và tên:{" "}
                                                        {child.person.name}
                                                    </div>
                                                    <div>
                                                        Thành tích: {child.rank}
                                                    </div>
                                                </div>
                                                {type === 1 ? null : (
                                                    <div
                                                        class="col s3 right-align valign-wrapper"
                                                        key={child.person._id}
                                                    >
                                                        <button
                                                            data-target="add-proof"
                                                            class="button-1 waves-effect waves-light indigo accent-3 white-text btn-small modal-trigger "
                                                            onClick={() =>
                                                                set_awardId(
                                                                    child._id
                                                                )
                                                            }
                                                        >
                                                            Thêm hồ sơ
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            {/* <ModalUpload awardId={award_id} /> */}
            <ModalUpload />
        </>
    );
}

export default RewardDetail;
