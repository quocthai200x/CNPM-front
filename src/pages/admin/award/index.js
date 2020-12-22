import React,{useState} from 'react'
import { menuAward } from "../../../constant/adminMenu"
import SideNav from "../../../components/sidenav"
import Dashboard from "./Dashboard"
import Detail from "./Detail"
function AwardPage() {
    const [awardID_detail,set_awardID_detail] = useState(null);
    
    const getDetail = (award_id) =>{
        set_awardID_detail(award_id);
    }
    return (
        <>      
            <div className="body">
                <div className="row nav-row">
                    <SideNav modal_id = "#add-award" menu = {menuAward} buttonName = "Thêm phần thưởng"></SideNav>
                    <div class="col s10 ">
                        <div className="row">
                            <Dashboard getDetail = {(award_id)=>getDetail(award_id)}></Dashboard>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <Detail award_id = {awardID_detail}></Detail>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AwardPage
