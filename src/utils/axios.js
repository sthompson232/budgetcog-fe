import axios from 'axios'

const options = {
    headers: {
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json',
    accept: 'application/json',
    }  
}

const url = 'http://localhost:8000/api/'
// const url = 'https://budgetcog.com/'

const axiosGet = (request_string) => {
    let response = axios.get(`${url}${request_string}`, options)
    return response
}

const axiosPost = (request_string, payload) => {
    let response = axios.post(`${url}${request_string}`, payload, options)
    return response
}

export {
    axiosGet,
    axiosPost
}