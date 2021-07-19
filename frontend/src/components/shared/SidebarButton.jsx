import React from 'react'
import { 
    Box,
    Link as ReachLink,
    Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const SidebarButton = ({ to, name }) => {
    return (
        <Box py={4}>
            <Link as={ReachLink} to={to}><Button w="100%">{name}</Button></Link>
        </Box>
    )
}

export default SidebarButton
