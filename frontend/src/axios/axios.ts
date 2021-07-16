import axios from 'axios';

const baseURL:string = 'http://localhost:8000/'
const token:string | null = localStorage.getItem('access_token')

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;