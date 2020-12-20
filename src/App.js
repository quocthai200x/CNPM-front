// import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter} from "react-router-dom"

import AdminPage from "./pages/admin/index"
function App() {
  return (
    <BrowserRouter>
      <Route path = "/admin" component = {AdminPage}></Route>
    </BrowserRouter>
  );
}

export default App;
