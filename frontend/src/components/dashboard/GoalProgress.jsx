import React from 'react'
import {
    Box,
    CircularProgress,
    Center,
    Heading
} from '@chakra-ui/react'
import { calculate_percentage } from '../../utils/sums'


const GoalProgress = ({ total_saved, goal, color }) => {
    
    const percentage = calculate_percentage(total_saved, goal)

    return (
        <Box p={4} bg='white' borderRadius={12} boxShadow='md'>
            <Heading className="headings" fontWeight={800} size={'lg'} mb={2}>Your goal progress...</Heading>
            <Center h='88%'>
                <CircularProgress value={percentage > 0 ? percentage : 0} size='15rem' thickness="10px" color={`${color}.500`} />
            </Center>
        </Box>
    )
}

export default GoalProgress
