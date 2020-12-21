import React from 'react'
import {BrowserRouter,Route} from "react-router-dom"
import FeePage from "./fee/index"
const AdminPage = ({match}) => {
    return (
    <BrowserRouter>
        <Route path = {match.url +"/khoan-thu"} component = {FeePage}></Route>
    </BrowserRouter>
    )
}

export default AdminPage
