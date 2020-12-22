import React, { useEffect, useState } from "react";
import RewardDetail from "./RewardDetail";
import { getAllAwardAPI } from "../../../../apis/award/";
import ModalUpload from "./ModalUpload";

function Reward() {
    const [reward, set_reward] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getReward();
    }, []);

    const getReward = async () => {
        const res = await getAllAwardAPI();
        set_reward(res.data.data);
        console.log(res.data.data);
    };

    return (
        <>
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
                    {reward.map((item) => (
                        <RewardDetail
                            id={item._id}
                            name={item.name}
                            type={item.type}
                            isDone={item.isDone}
                            from={item.from}
                            to={item.to}
                            description={item.description}
                            gifts={item.gifts}
                        />
                    ))}
                </ul>
            </div>
            <ModalUpload />
        </>
    );
}

export default Reward;
