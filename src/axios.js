import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.PERSONALITY_TEST_API_URI || `http://127.0.0.1:8000/`
});

export default axiosInstance;