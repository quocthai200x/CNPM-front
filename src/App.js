// import logo from './logo.svg';
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import AuthPage from "./pages/auth/index"
import AdminPage from "./pages/admin/index";
import UserPage from "./pages/user/index";
import IndexPage from "./pages/auth/index_page"
import SignUp from "./pages/auth/sign_up";
import Login from "./pages/auth/sign_in"

function App() {
    return (
        <BrowserRouter>
            <Route path="/admin" component={AdminPage}></Route>
            <Route path="/user" component={UserPage}></Route>
            {/* <Route path = "/auth" component = {AuthPage}></Route> */}
            <Route path= "/" exact component = {IndexPage}></Route>
            <Route path = "/auth/register" component = {SignUp}></Route>
            <Route path = "/auth/sign-in" component = {Login}></Route>
        </BrowserRouter>
    );
}

export default App;
