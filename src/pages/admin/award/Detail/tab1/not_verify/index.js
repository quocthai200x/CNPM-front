import React,{useState,useEffect} from "react";
import Detail from "./detail";


function NotVerify(props) {
    const [_list, set_list] = useState([])
    useEffect(() => {
        set_list(props.not_award);
    }, [props.not_award])

    const verify = (listID,index) =>{
        props.verifying(listID,index);
    }
    return (
        <div id="chua-gui" className="col s12" style={{ padding: 0 }}>
            <br/>
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
                {_list.map((home)=>{
                   return(
                       <Detail home = {home} verifying = {(listID)=> verify(listID,_list.indexOf(home))} />
                   )
                })}
            </ul>
        </div>
    );
}

export default NotVerify;
