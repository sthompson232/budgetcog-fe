import { useEffect } from 'react'
import { axiosGet } from '../utils/axios'
import Sidebar from './sidebar/Sidebar'
import { Box } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'


const Dashboard = () => {
    const variant = useBreakpointValue({ base: 'drawer', lg: 'sidebar'})

    useEffect(() => {
        axiosGet('test/').then(res => console.log(res.data))
      }, [])

    return (
        <div>
            <Sidebar variant={variant}/>
            <Box ml={variant === 'sidebar' ? 320 : 0}>
                <h1>Dashboard</h1>
            </Box>
        </div>
    )
}

export default Dashboard
