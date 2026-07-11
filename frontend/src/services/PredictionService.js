import axios from "axios";

const API = "http://localhost:7059/api/predict";

export const predictCrime = (data) => {
    return axios.post(API, data);
};