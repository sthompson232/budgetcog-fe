import React from 'react'
import { 
    Progress,
    Box 
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'


const ThisMonthProgress = () => {
    const color = useSelector(state => {return state.user.color})
    console.log(color)

    return (
        <Box p={4} bg='white' borderRadius={12} boxShadow='md'>
            <Progress colorScheme={color} height="32px" value={64} borderRadius={12}/>        
        </Box>
    )
}

export default ThisMonthProgress
