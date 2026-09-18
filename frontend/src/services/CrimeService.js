import axios from "axios";

const API_URL = "https://ai-crimespot-predictor-5.onrender.com/api/crimes";

export const getCrimes = () => {
    return axios.get(API_URL);
};

export const addCrime = (crime) => {
    return axios.post(API_URL, crime);
};

export const deleteCrime = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};