import React from 'react'
import "./index.css"
import { menu } from "../../constant/adminMenu"
// import ModelCreate from "../ModalCreate/index"

function SideNav(props) {
    return (
        <div className="col s2 nav-col  indigo darken-3">
            <div className="nav-float white-text">
                <div className="nav-float-item">
                    <a
                        href="#add-fee"
                        className="waves-effect waves-dark btn white indigo-text darken-3 modal-trigger"><i
                            className="material-icons left">add</i>Thêm khoản thu</a>                </div>
                {menu.map((item) => {
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
