import axios from 'axios'

const axiosGet = (request_string) => {
    let response = axios.get(`http://localhost:8000/api/${request_string}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            accept: 'application/json',
          }  
    })
    return response
}


const axiosPost = (request_string, payload) => {
    let response = axios.get(`http://localhost:8000/api/${request_string}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            accept: 'application/json',
          }  
    })
    return response
}

export {
    axiosGet,
    axiosPost
}