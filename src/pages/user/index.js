import React,{useState,useEffect} from "react";
import NavBar from "../../components/navbar/";
import UserInfo from "./UserInfo";
import MemberList from "./member/MemberList";
import TabContainer from "./tabs/TabContainer";
// import { getHomeInfoAPI } from "../../apis/info";

function UserPage() {
    const [_home_id, set_home_id] = useState("")
    useEffect(() => {
        getHomeID()
    }, [])

    const getHomeID = async () =>{
        let home_id = await localStorage.getItem("home_id_logged");
        console.log(home_id);
        // lấy home_id sau khi sign in, ở chỗ sign in đã setItem,bên này getItem
        if(home_id){
            set_home_id(home_id)
        }
    }
    return (
        <div>
            <NavBar title="Hộ gia đình" listLink={[{}]} />
            <div className="body container">
                <UserInfo
                    id="123"
                    name="Phan Đức Trọng"
                    phone="012345678"
                    address="Hanoi"
                    totalPerson="6"
                    totalChild="2"
                />
                <MemberList />
                <TabContainer />
            </div>
        </div>
    );
}

export default UserPage;
