import axios from "../../axios"

export const getAllFeeAPI  = () =>{
    return axios.get("/api/fee/get-all-fees")
}

export const getAllFeeBillAPI  = (home_id = null, fee_id = null) =>{
    return axios.get(`/api/fee/get-all-bills?home_id${home_id}=&fee_id=${fee_id}`)
}