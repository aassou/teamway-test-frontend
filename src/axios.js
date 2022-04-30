import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.PERSONALITY_TEST_API_URI || `https://teamway-api.herokuapp.com/api`
});

export default axiosInstance;