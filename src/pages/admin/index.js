import React from 'react'
import {BrowserRouter,Route} from "react-router-dom"
import FeePage from "./fee/index"
import AwardPage from "./award/index"
import { linkAdmin } from "../../constant/linkNavBar";
import Navbar from '../../components/navbar';


const AdminPage = ({match}) => {
    return (
    <BrowserRouter>
        <Navbar title="Cán bộ" listLink={linkAdmin} ></Navbar>
        <Route path = {match.url +"/khoan-thu"} component = {FeePage}></Route>
        <Route path = {match.url +"/phan-thuong"} component = {AwardPage}></Route>

    </BrowserRouter>
    )
}

export default AdminPage
