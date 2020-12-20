import React from 'react';
import Navbar from '../../components/navbar';
import SideNav from "../../components/sidenav"
import { linkAdmin } from "../../constant/linkNavBar";
import Dashboard from "./Dashboard"
import Detail  from "./Detail"
import "./index.css"
function AdminPage() {
    
    return (
        <>
            <Navbar title="Cán bộ" listLink={linkAdmin} ></Navbar>
            <div className="body">
                <div className="row nav-row">
                    <SideNav></SideNav>
                    <div class="col s10 ">
                        <div className="row">
                            <Dashboard></Dashboard>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <Detail></Detail>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminPage
