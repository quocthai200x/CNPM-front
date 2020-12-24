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
                <UserInfo />
                <MemberList />
                <TabContainer />
            </div>
        </div>
    );
}

export default UserPage;
