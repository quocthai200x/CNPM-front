import React,{useState} from 'react';
import SideNav from "../../../components/sidenav"
import Dashboard from "./Dashboard"
import Detail  from "./Detail"
import ModalCreate from "../../../components/ModalCreate/index"
import { menuFee } from "../../../constant/adminMenu"

import "./index.css"
function AdminPage(){
    const [feeID_detail,set_feeID_detail] = useState(null);
    const [money,setMoney] = useState(0);

    const [created,setCreated] = useState(undefined);
    
    const getDetail = (fee_id) =>{
        // console.log(fee_id);
        set_feeID_detail(fee_id)
    }
    

    return (
        <>      
            <ModalCreate created = {(data)=>setCreated(data)}/>
            
            <div className="body">
                <div className="row nav-row">
                    <SideNav modal_id = "#add-fee" buttonName = "Thêm khoản thu" menu = {menuFee}></SideNav>
                    <div class="col s10 ">
                        <div className="row">
                            <Dashboard created = {created} money = {money} getDetail = {(fee_id)=>getDetail(fee_id)}></Dashboard>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <Detail fee_id = {feeID_detail}  addTotalMoney = {(money)=> setMoney(money)} ></Detail>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminPage
