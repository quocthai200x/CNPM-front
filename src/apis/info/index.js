import axios from "../../axios";

export const getHomeInfoAPI = (user_id = "5fddc65e51423d30f8bb52cd") => {
    return axios.get(`/api/home?id=${user_id}`);
};
