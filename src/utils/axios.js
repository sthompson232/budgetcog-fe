import axios from 'axios'
import { url } from '../url'

const options = {
    headers: {
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json',
    accept: 'application/json',
    }  
}

const axiosGet = (request_string) => {
    let response = axios.get(`${url}/api/${request_string}`, options)
    return response
}

const axiosPost = (request_string, payload) => {
    let response = axios.post(`${url}/api/${request_string}`, payload, options)
    return response
}

export {
    axiosGet,
    axiosPost
}