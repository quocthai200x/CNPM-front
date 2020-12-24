import React, { useState, useEffect } from "react";
import ExpeditureDetail from "./ExpeditureDetail";
import { getAllFeeAPI } from "../../../../apis/fee";

function Expediture() {
    // const id = "5fe00c22c979b81a1007d93b";
    // const [data, setData] = useState({
    //     id: "000000",
    //     name: "Loading",
    //     price: "000000",
    //     from: "00000",
    //     to: "00000",
    // });

    const [data, setData] = useState([
        {
            id: "000000",
            name: "Loading",
            price: "000000",
            from: "00000",
            to: "00000",
        },
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getAllFeeAPI();
        setData(data.data.data);
        console.log(data.data.data);
        setLoading(false);
    };
    return (
        <div id="test1" className="col s12" style={{ padding: 0 }}>
            <br />
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
                <>
                    {loading ? (
                        <ExpeditureDetail data={data} />
                    ) : (
                        data.listFee.map((fee) => (
                            <ExpeditureDetail data={fee} />
                        ))
                    )}
                </>
                {/* <ExpeditureDetail/>
                <ExpeditureDetail />
                <ExpeditureDetail /> */}
            </ul>
        </div>
    );
}

export default Expediture;
