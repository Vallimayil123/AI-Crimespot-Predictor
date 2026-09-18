import axios from "axios";

const API = "https://ai-crimespot-predictor-5.onrender.com/api/predict";

export const predictCrime = (data) => {
    return axios.post(API, data);
};