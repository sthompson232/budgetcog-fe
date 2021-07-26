import React from 'react'
import { useSelector } from "react-redux"
import Logout from '../auth/Logout'
import { 
    Box,
    Text,
    Flex
 } from '@chakra-ui/react'

const SidebarFooter = () => {
    let name = useSelector(state => {return state.user.fullName})
    let image = useSelector(state => {return state.user.imageUrl})
    let email = useSelector(state => {return state.user.email})

    return (
        <div>
            <Box>
                <hr />
                <Flex alignItems="center">
                    <img referrerPolicy="no-referrer" src={image} alt={name} className="avatar" />
                    <Box pl={2} py={4}>
                        <Text fontWeight="bold">
                            {name}
                        </Text>
                        <Text fontSize="sm" color="#777777">{email}</Text>
                    </Box>
                </Flex>
                <Box py={2}>
                    <Logout />
                </Box>
            </Box>
        </div>
    )
}

export default SidebarFooter
