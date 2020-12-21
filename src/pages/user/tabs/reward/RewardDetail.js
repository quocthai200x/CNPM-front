import React from "react";
import "./css/RewardDetail.css";

function RewardDetail() {
    return (
        <li>
            <div class="collapsible-header padding-off">
                <table class="highlight centered">
                    <tbody>
                        <tr>
                            <td class="col s2">HSGK-20</td>
                            <td class="col s3">Học sinh giỏi, khá 2020</td>
                            <td class="col s2">Có</td>
                            <td class="col s3">30/10/2020-30/11/2020</td>
                            <td class="col s2 orange-text text-lighten-2">
                                Đang xử lý
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
                            <span>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quaerat omnis ipsam doloremque
                                quisquam tempore laudantium incidunt soluta
                                dolorem numquam consequatur eum corrupti
                                aspernatur, modi labore error illum praesentium
                                alias. Tenetur.
                            </span>
                        </div>
                        <div>
                            <div class="detail-gift__title">Phần thưởng</div>
                            <div class="row">
                                <table
                                    class="col s6 highlight gift-list"
                                    style={{ padding: 0 }}
                                >
                                    <tr>
                                        <td class="col s6">Học sinh giỏi</td>
                                        <td class="col s6">7 quyển vở</td>
                                    </tr>
                                    <tr>
                                        <td class="col s6">Học sinh khá</td>
                                        <td class="col s6">5 quyển vở</td>
                                    </tr>
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
            </div>
        </li>
    );
}

export default RewardDetail;
