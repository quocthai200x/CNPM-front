// import logo from './logo.svg';
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import AdminPage from "./pages/admin/index";
import UserPage from "./pages/user/index";

function App() {
    return (
        <BrowserRouter>
            <Route path="/admin" component={AdminPage}></Route>
            <Route path="/user" component={UserPage}></Route>
  
        </BrowserRouter>
    );
}

export default App;
