import axios from "../../axios";

export const getHomeInfoAPI = (user_id = "") => {
    return axios.get(`/api/home?id=${user_id}`);
};

export const createPersonAPI = (
    name,
    dob,
    home_id,
    work_at,
    idNumber,
    gender
) => {
    return axios.post(
        `/api/person?name=${name}&dob=${dob}&home=${home_id}&work_at=${work_at}&cmnd=${idNumber}&gender=${gender}`
    );
};

export const addMemberAPI = (
    listID = [],
    home_id = "5fddc65e51423d30f8bb52cd"
) => {
    return axios.post(`/api/home/add-members`, {
        listID,
        id: home_id,
    });
};

export const updatePersonAPI = (
    name,
    dob,
    person_id,
    idNumber,
    work_at,
    gender
) => {
    return axios.put(
        `/api/person?name=${name}&dob=${dob}&id=${person_id}&cmnd=${idNumber}&work_at=${work_at}&gender=${gender}`
    );
};

// nhaafm
// xong r do , day laf truyen qua body, tham so thu 2 cuar .post ma lay cai list id ve kieu gi nhi
// bay h dua vao createPersonAPI
