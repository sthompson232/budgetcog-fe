import React from 'react'
import {
    Box
} from '@chakra-ui/react'


const GoalProgress = ({ total_saved, goal }) => {
    
    return (
        <Box p={4} bg='white' borderRadius={12} boxShadow='md'>
            {total_saved}
            {goal}
        </Box>
    )
}

export default GoalProgress
