import React from "react";
import RewardDetail from "./RewardDetail";

function Reward() {
    return (
        <div id="test2" class="col s12" style={{ padding: 0 }}>
            <br />
            <table class="highlight centered">
                <thead class="card-panel indigo accent-2">
                    <tr class="white-text">
                        <th class="col s2">Mã phần thưởng</th>
                        <th class="col s3">Tên phần thưởng</th>
                        <th class="col s2">Minh chứng</th>
                        <th class="col s3">Thời gian nộp phần thưởng</th>
                        <th class="col s2">Trạng thái</th>
                    </tr>
                </thead>
            </table>
            <ul class="collapsible popout">
                <RewardDetail />
                <RewardDetail />
                {/* <RewardDetail /> */}
            </ul>
        </div>
    );
}

export default Reward;
