import axios from "../../axios";

export const getAllAwardAPI = () => {
    return axios.get(`/api/award/`);
};

export const getAwardDetailAPI = (award_id, type, home_id) => {
    return axios.get(
        `/api/award/get-all-award-detail?award_id=${award_id}&type=${type}&home_id=${home_id}`
    );
};

// export const updateImageAPI = () => {
//     return axios.put(`/api/award/update-image-rank`, {

//     })
// }
