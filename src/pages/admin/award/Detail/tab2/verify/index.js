import React, { useState, useEffect } from "react";
import Detail from "./detail";

function Verify(props) {
    const [_list, set_list] = useState([])
    useEffect(() => {
        // console.log("Props:")
        // console.log(props.award);
        // console.log("------")
        set_list(props.award);
    }, [props.award])


    return (
        <div id="da-xac-minh" className="col s12" style={{ padding: 0 }}>
            <br />
            <table className="highlight centered">
                <thead className="card-panel indigo accent-2">
                    <tr className="white-text">
                        <th className="col s3">Mã hộ</th>
                        <th className="col s2">Tên chủ hộ</th>
                        <th className="col s3">Địa chỉ</th>
                        <th className="col s2">Tổng chi</th>
                        <th className="col s2"></th>
                    </tr>
                </thead>
            </table>
            <ul className="collapsible popout">
                {
                    _list.map((home) => {
                        // console.log("List sau khi xét:")
                        // console.log(_list);
                        // console.log("--------------");
                        return (
                            <Detail home={home} />
                        )
                    })}
            </ul>
        </div>
    );
}

export default Verify;