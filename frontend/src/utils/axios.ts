import axios from 'axios'

export const axiosGet = (request_string: string) => {
    let response = axios.get(`http://localhost:8000/api/${request_string}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            accept: 'application/json',
          }  
    })
    return response
}
