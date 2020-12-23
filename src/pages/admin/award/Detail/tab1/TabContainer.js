import React, { useEffect,useState } from "react";
import NotVerify from "./not_verify";
import Verify from "./verify";
import "./css/TabContainer.css";
import {getSubmitAPI} from "../../../../../apis/award/index"
function TabContainer(props) {
    const [_not_award, set_not_award] = useState([])
    const [_award, set_award] = useState([]);
    useEffect(() => {
        // console.log(props.award)
        set_not_award(props.not_award)
        set_award(props.award);
    }, [props.not_award,props.award])

    const submitAward  = (listID,index) =>{
        // TODO : GỌI API
        listID.forEach(async(id)=>{
            const res= await getSubmitAPI(id,props.type);
            // console.log(res);
        })
        let new_list_not_submit = _not_award.filter(e => {
            return _not_award.indexOf(e) != index
        });
        // console.log("CONCAT..")
        set_award([..._award,_not_award[index]])
        // console.log("-------------")

        // set_award(_award.push(_not_award[index]));
        set_not_award(new_list_not_submit);
    }

    return (
        <div className="row">
            <div class="col s12">
                <div className = "col s6">
                    <h4>
                        Danh sách được phát thưởng
                    </h4>
                </div>
                <ul class="tabs col s6">
                    <li class="tab col s6">
                        <a
                            href="#chua-gui"
                            class="active indigo-text text-accent-3"
                        >
                            Chưa gửi
                        </a>
                    </li>
                    <li class="tab col s6">
                        <a href="#da-gui" class="indigo-text text-accent-3">
                            Đã gửi
                        </a>
                    </li>
                </ul>
            </div>
            <NotVerify  not_award ={_not_award} verifying = {(listID,index)=>{submitAward(listID,index)}}/>
            <Verify  award = {_award}/>
        </div>
    );
}

export default TabContainer;
