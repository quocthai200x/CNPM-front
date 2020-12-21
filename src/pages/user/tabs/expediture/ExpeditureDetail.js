import React from "react";
import "../css/Expediture.css";

function ExpeditureDetail() {
    return (
            <li>
                <div className="collapsible-header padding-off">
                    <table className="highlight centered">
                        <tbody>
                            <tr>
                                <td className="col s3">PHI_VS_T10</td>
                                <td className="col s3">Phí vệ sinh tháng 10</td>
                                <td className="col s3">72.000</td>
                                <td className="col s3">
                                    30/10/2020-30/11/2020
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="collapsible-body">
                    {/* mô tả phần thưởng */}
                    <div className="indigo-text text-accent-3">
                        Mô tả khoản thu:
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Recusandae eveniet adipisci nesciunt ea aspernatur
                        magni, veniam consequuntur qui dolorem, nulla, quibusdam
                        eos minus. Consequuntur accusamus repudiandae distinctio
                        harum pariatur veritatis!
                    </div>
                    <br />
                    <div className="row">
                        <div
                            className="col s6"
                            style={{ padding: 0, margin: 0 }}
                        >
                            <div className="col s6">
                                <span className="indigo-text text-accent-3">
                                    Loại thu: 
                                </span>
                                <span>theo hộ khẩu</span>
                            </div>
                            <div className="col s6">
                                <span className="indigo-text text-accent-3">
                                    Yêu cầu: 
                                </span>
                                <span>bắt buộc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
   
    );
}

export default ExpeditureDetail;
