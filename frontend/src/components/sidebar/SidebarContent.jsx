import React from 'react'
import { 
    Box,
    Link,
    Button
} from '@chakra-ui/react'

const SidebarContent = () => {
    return (
        <Box py={4}>
            <Link as={Button} to="/home">Sidebar content</Link>
        </Box>
    )
}

export default SidebarContent
