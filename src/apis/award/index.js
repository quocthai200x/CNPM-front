import axios from "../../axios"

export const getAllAwardAPI = (award_id = "") =>{
    return axios.get(`/api/award/?award_id=${award_id}`)
}

export const getAwardDetailsAPI = (award_id = "",type = "0") =>{
    return axios.get(`/api/award/get-all-award-detail?award_id=${award_id}&type=${type}`)
}

export const getAwardDoneAPI = (award_id = "", type = "0") =>{
    return axios.put(`/api/award/award-done?award_id=${award_id}&type=${type}`)
}

export const getSubmitAPI = (gift_id= null,type ="0") =>{
    return axios.put(`/api/award/submit-award`,{
        id: gift_id,
        type : type,
    })
}