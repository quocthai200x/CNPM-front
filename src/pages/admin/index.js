import React,{useState} from 'react';
import Navbar from '../../components/navbar';
import SideNav from "../../components/sidenav"
import { linkAdmin } from "../../constant/linkNavBar";
import Dashboard from "./Dashboard"
import Detail  from "./Detail"
import "./index.css"
function AdminPage(){
    const [feeID_detail,set_feeID_detail] = useState(null);
    const getDetail = (fee_id) =>{
        // console.log(fee_id);
        set_feeID_detail(fee_id)
    }
    return (
        <>
            <Navbar title="Cán bộ" listLink={linkAdmin} ></Navbar>
            <div className="body">
                <div className="row nav-row">
                    <SideNav></SideNav>
                    <div class="col s10 ">
                        <div className="row">
                            <Dashboard getDetail = {(fee_id)=>getDetail(fee_id)}></Dashboard>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <Detail fee_id = {feeID_detail} ></Detail>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminPage
