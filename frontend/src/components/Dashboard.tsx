import { useEffect } from 'react'
import Logout from './auth/Logout'
import { useSelector } from "react-redux"
import { axiosGet } from '../utils/axios'

const Dashboard = () => {
    let name = useSelector((state: any) => {return state.user.fullName})
    let image = useSelector((state: any) => {return state.user.imageUrl})
    let email = useSelector((state: any) => {return state.user.email})

    useEffect(() => {
        axiosGet('test/').then(res => console.log(res.data))
      }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <h1>Hello {name}</h1>
            <h2>Your email address is {email}</h2>
            <img src={image} alt={name} />
            <Logout />
        </div>
    )
}

export default Dashboard
