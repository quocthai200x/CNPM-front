import React, { useEffect, useState } from 'react'
import {registerAPI } from "../../apis/auth/index"
function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_host, set_host] = useState("");
    const [_detail, set_detail] = useState('');
    const [_city, set_city] = useState('')
    const [_commune, set_commune] = useState('')
    const [_district, set_district] = useState('')


    const register = async () => {
        let city = {
            id: 0,
            name: _city,
        }
        let district = {
            id: 0,
            name: _district,
        }
        let commune = {
            id: 0,
            name: _commune,
        }
        if(username && password && _host && _detail && _commune && _city && _district){
            const res = await registerAPI(username,password,_host,_detail,city,district,commune);
            if(res.data.code == 1000){
                window.location.replace('http://localhost:3000/auth/sign-in')
            }
        }
    };
    return (
        <div className="row">
            <div className="col s6 offset-s5"
                style={{ width: 300, padding: 10, borderRadius: 10, marginTop: 100, border: "1px solid black" }}>
                <div className="row">
                    <h5 style={{ marginLeft: 10 }}>
                        Đăng kí
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

                <div className="row">
                    <div class="input-field col s12">
                        <input value={_host} onChange={(e) => set_host(e.target.value)} id="host" type="text" class="validate" />
                        <label for="host">Chủ hộ</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <input value={_city} onChange={(e) => set_city(e.target.value)} id="city" type="text" class="validate" />
                        <label for="city">Thành phố</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <input value={_district} onChange={(e) => set_district(e.target.value)} id="_district" type="text" class="validate" />
                        <label for="_district">Quận</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <input value={_commune} onChange={(e) => set_commune(e.target.value)} id="_commune" type="text" class="validate" />
                        <label for="_commune">Phường</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <input value={_detail} onChange={(e) => set_detail(e.target.value)} id="_detail" type="text" class="validate" />
                        <label for="_detail">Địa chỉ cụ thể (số nhà, đường,...)</label>
                    </div>
                </div>
                

                <div className="row valign-wrapper">
                    <a class="col s6 offset-s3 waves-effect waves-light btn indigo accent-2"
                        onClick={() => register()}>
                        Đăng kí
                    </a>
                </div>
                <div className="row">
                    <div className="col s10 offset-s2">Đã có tài khoản <a href="/auth/sign-in">Đăng nhập</a></div>
                </div>
            </div>
        </div>
    )
}

export default Signin
