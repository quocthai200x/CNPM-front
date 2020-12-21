import axios from "../../axios"

export const getAllFeeAPI  = (fee_id = "") =>{
    return axios.get(`/api/fee/get-all-fees?fee_id=${fee_id}`)
}

export const getAllFeeBillAPI  = (home_id = null, fee_id = null) =>{
    return axios.get(`/api/fee/get-all-bills?home_id${home_id}=&fee_id=${fee_id}`)
}
export const getFeeDoneAPI = (fee_id) =>{
    return axios.put(`/api/fee/fee-done?fee_id=${fee_id}`)   
}

export const getAllBillAPI = (fee_id,home_id) =>{
    return axios.get(`/api/fee/get-all-bills?home_id=${home_id}&fee_id=${fee_id}`)
}

export const getSubmit = (bill_id = "", received = 0) =>{
    return axios.put(`/api/fee/get-submitted-bill?id=${bill_id}&received=${received}`)
}