import React from "react";
import NavBar from "../../components/navbar/";
import UserInfo from "./UserInfo";
import MemberList from "./member/MemberList";
import TabContainer from "./tabs/TabContainer";

function UserPage() {
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
