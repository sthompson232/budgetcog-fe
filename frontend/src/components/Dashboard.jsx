import { useEffect } from 'react'
import Logout from './auth/Logout'
import { useSelector } from "react-redux"
import { axiosGet } from '../utils/axios'
import Sidebar from './Sidebar'
import { Box } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'


const Dashboard = () => {
    let name = useSelector((state) => {return state.user.fullName})
    let image = useSelector((state) => {return state.user.imageUrl})
    let email = useSelector((state) => {return state.user.email})
    const variant = useBreakpointValue({ base: 'drawer', md: 'sidebar'})

    useEffect(() => {
        axiosGet('test/').then(res => console.log(res.data))
      }, [])

    return (
        <div>
            <Sidebar variant={variant}/>
            <Box ml={variant === 'sidebar' ? 250 : 0}>
                <h1>Dashboard</h1>
                <h1>Hello {name}</h1>
                <h2>Your email address is {email}</h2>
                <img src={image} alt={name} />
            <Logout />
            </Box>
        </div>
    )
}

export default Dashboard
