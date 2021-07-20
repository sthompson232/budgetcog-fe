import React, { useEffect } from 'react'
import { axiosGet } from '../../utils/axios'

const ThisMonth = () => {

    useEffect(() => {
        axiosGet('this-month/')
        .then(res => console.log(res))
    })
    return (
        <div>
            <h1>This month</h1>
        </div>
    )
}

export default ThisMonth
