import React from 'react'
import { 
    Box,
    Heading,
} from '@chakra-ui/react'
import ColorSelector from './ColorSelector'


const Settings = () => {
    return (
        <Box p={4} bg='white' borderRadius={12}>
            <Heading size={'xl'} fontWeight={800} mb={2}>Settings</Heading>
            <hr />
            <ColorSelector />
        </Box>
    )
}

export default Settings
