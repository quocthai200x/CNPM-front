import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import SignIn from './sign_in';
import SignUp from './sign_up';


function index() {
    return (
    <BrowserRouter>
        <Route path = "/register" exact component = {SignUp}></Route>
        <Route path = "/sign-in" exact component = {SignIn}></Route>
    </BrowserRouter>
    )
}

export default index
