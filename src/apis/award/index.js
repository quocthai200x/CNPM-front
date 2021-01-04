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

export const addGiftAPI = (gift) =>{
    // console.log(gift);
    return axios.put(`/api/award/add-gifts`,{
        id:gift.id,
        type:gift.type,
        gifts:gift.gifts,
    })
}

export const getSubmitAPI = (gift_id= null,type ="0") =>{
    return axios.put(`/api/award/submit-award`,{
        id: gift_id,
        type : type,
    })
}

export const createAwardAPI = (name,type,gifts,from,to,description) =>{
    return axios.post(`/api/award`,{
            name,
            type,
            gifts,
            from,
            to,
            description,  
    })
}
export const imageUploadAPI = (image, rank, id) => {
    return axios.put(`/api/award/update-image-rank`, {
        image,
        rank,
        id,
    });
};
