import { useEffect, useState } from 'react'
import Logout from './auth/Logout'
import { useSelector } from "react-redux"
import { axiosGet } from '../utils/axios'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import Sidebar from './Sidebar'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

const Dashboard = () => {
    let name = useSelector((state: any) => {return state.user.fullName})
    let image = useSelector((state: any) => {return state.user.imageUrl})
    let email = useSelector((state: any) => {return state.user.email})

    const [isSidebarOpen, setSidebarOpen] = useState(false)
     const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

     const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

    useEffect(() => {
        axiosGet('test/').then(res => console.log(res.data))
      }, [])

    return (
        <div>
            <Sidebar 
                variant={variants?.navigation}
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
            />
            <h1>Dashboard</h1>
            <h1>Hello {name}</h1>
            <h2>Your email address is {email}</h2>
            <img src={image} alt={name} />
            <Logout />
        </div>
    )
}

export default Dashboard
