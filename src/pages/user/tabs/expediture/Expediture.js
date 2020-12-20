import React from "react";
import ExpeditureDetail from "./ExpeditureDetail";
// import "../css/Expediture.css";

function Expediture() {
    return (
        <div id="test1" className="col s12" style={{ padding: 0 }}>
            <div className="row payment-info">
                <div className="col s4">Tổng khoản thu tháng này:</div>
                <div className="col s4">Số khoản thu còn phải đóng:</div>
                <div className="col s4">Tổng số tiền phải nộp:</div>
            </div>

            <table className="highlight centered">
                <thead className="card-panel indigo accent-2">
                    <tr className="white-text">
                        <th className="col s3">Mã khoản thu</th>
                        <th className="col s3">Tên khoản thu</th>
                        <th className="col s3">Tổng số tiền nộp</th>
                        <th className="col s3">Thời gian nộp</th>
                    </tr>
                </thead>
            </table>
            <ul className="collapsible popout">
            <ExpeditureDetail />
            <ExpeditureDetail />
            <ExpeditureDetail />
            </ul>
        </div>
    );
}

export default Expediture;
