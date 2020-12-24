import axios from "../../axios"

export const registerAPI = (username,password,host,detail,city,district,commune) =>{
    return axios.post(`/api/auth/register`,{
        username,
        password,
        host,
        address:{
            detail,
            city,
            district,        
            commune,
        }
    })
}

export const loginAPI = (username,password) =>{
    return axios.post(`/api/auth/login`,{
        username,password
    })
}