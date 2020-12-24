import React, { useEffect, useState } from 'react'
import {loginAPI} from "../../apis/auth/index"
function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = async ()=>{
        const res = await loginAPI(username,password);
        if(res.data.code == 1000){
            await localStorage.setItem('home_id_logged',res.data.data._id);
            window.location = 'http://localhost:3000/user';
        }
        console.log(res);
        setUsername('Thất bại')
        setPassword('')
    };
    return (
        <div className="row">
            <div className="col s6 offset-s5"
                style={{ width: 300, padding: 10, borderRadius: 10, marginTop: 100, border: "1px solid black" }}>
                <div className="row">
                    <h5 style={{ marginLeft: 10 }}>
                        Đăng nhập
                    </h5>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" type="text" class="validate" />
                        <label for="username">Tên đăng nhập</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" class="validate" />
                        <label for="password">Mật khẩu</label>
                    </div>
                </div>
                <div  className="row valign-wrapper">
                    <a class="col s6 offset-s3 waves-effect waves-light btn indigo accent-2"
                        onClick={() => login()}>
                        Đăng nhập
                    </a>
                </div>
                <div className = "row">
                    <div className = "col s10 offset-s2">Chưa có tài khoản <a href = "/auth/register">Đăng kí</a></div>
                </div>
            </div>
        </div>
    )
}

export default Signin
