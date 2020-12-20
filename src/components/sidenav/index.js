import React from 'react'
import "./index.css"
import {menu} from "../../constant/adminMenu"
function SideNav() {
    return (
        <div className="col s2 nav-col  indigo darken-3">
            <div className="nav-float white-text">
                <div className="nav-float-item">
                    <a className="waves-effect waves-dark btn white indigo-text darken-3"><i
                        className="material-icons left">add</i>Thêm khoản thu</a>
                </div>
                {menu.map((item)=>{
                    return (
                        <div className="nav-float-item">
                        <i className="material-icons">{item.icon}</i>
                        <a className="white-text" href={item.link}>{item.name}</a>
                    </div>
                    )
                })}
            </div>


        </div>
    )
}

export default SideNav
