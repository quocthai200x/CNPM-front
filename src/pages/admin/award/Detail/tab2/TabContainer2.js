import React, { useEffect,useState } from "react";
import NotVerify from "./not_verify";
import Verify from "./verify";
import Waiting from "./waiting"

import "./css/TabContainer.css";
import {getSubmitAPI,addGiftAPI} from "../../../../../apis/award/index"
function TabContainer(props) {
    const [_not_award, set_not_award] = useState([])
    const [_award, set_award] = useState([]);
    const [_waiting_list, set_waiting_list] = useState([]);
    useEffect(() => {
        // console.log(props.waiting);
        set_not_award(props.not_award)
        set_waiting_list(props.waiting);
        set_award(props.award);
    }, [props.not_award,props.award,props.waiting])

    // SUBMIT LOẠI 2
    const verify = async (list,index) =>{
        let length = list.length;
        let new_arr_home = [];
        list.forEach(async (gift)=>{
            // CALL API
            let res = await addGiftAPI(gift);
            if(res.data.code == 1000){
                let resSubmit = await getSubmitAPI(gift.id,gift.type);
                if(resSubmit.data.code == 1000){
                    length--;
                    new_arr_home.push(resSubmit.data.data);
                }
            }
            if(length == 0){
                await reset(index,new_arr_home,list);
            }
        })
    }
    const reset = async(index,arr,list) =>{
        // console.log("reset")
        let new_data = _waiting_list.filter(e => {
            return _waiting_list.indexOf(e) != index
        });
        await set_waiting_list(new_data)
        await set_award([..._award,arr]);
        props.updateInfo(list)
    }

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
                    <li class="tab col s4">
                        <a
                            href="#chua-xac-minh"
                            class=" indigo-text text-accent-3"
                        >
                            Chưa xác minh
                        </a>
                    </li>
                    <li class="tab col s4">
                        <a href="#cho-xac-minh" class=" active indigo-text text-accent-3">
                            Chờ xác minh
                        </a>
                    </li>
                    <li class="tab col s4">
                        <a href="#da-xac-minh" class="indigo-text text-accent-3">
                            Đã gửi
                        </a>
                    </li>
                </ul>
            </div>
            <NotVerify  not_award ={_not_award} verifying = {(listID,index)=>{submitAward(listID,index)}}/>
            <Waiting verify = {(list,index)=>verify(list,index)} waiting = {_waiting_list} gifts = {props.gifts}></Waiting>
            <Verify  award = {_award}/>
        </div>
    );
}

export default TabContainer;
