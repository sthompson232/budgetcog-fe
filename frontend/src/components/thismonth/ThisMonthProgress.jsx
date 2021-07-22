import React, { useEffect, useState } from 'react'
import { 
    Progress,
    Box,
    Heading,
    SimpleGrid,
    Text
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { total_expense, calculate_percentage, decimal_round } from '../../utils/sums'


const ThisMonthProgress = ({ expenses, recurring }) => {
    const [spent, setSpent] = useState()
    const [percent, setPercent] = useState()
    const [remaining, setRemaining] = useState()
    const color = useSelector(state => {return state.user.color})
    const budget = useSelector(state => {return state.user.budget})

    useEffect(() => {
        if (expenses && recurring) {
            let total = total_expense(expenses, recurring)
            setSpent(total.toFixed(2))
        } else if (expenses) {
            let total = 0
            for (const expense of expenses) {
                total += parseFloat(expense.cost)
            }
            setSpent(total.toFixed(2))
        }
    }, [expenses, recurring])

    useEffect(() => {
        if (spent && budget) {
            setPercent(calculate_percentage(spent, budget))
            setRemaining(decimal_round((budget - spent)))
        }
    }, [budget, spent])


    return (
        <Box p={4} mb={6} bg='white' borderRadius={12} boxShadow='md'>
            <SimpleGrid columns={[1, 1, 1, 2, 1, 2]} spacing={6} textAlign='center' p={4}>
                <Box py={3} borderRadius={12} borderWidth="1px" boxShadow="sm">
                    <Heading fontWeight={800} color={`${color}.500`} size={'2xl'}>£{spent}</Heading>
                    <Text>spent this month</Text>
                </Box>
                <Box py={3} borderRadius={12} borderWidth="1px" boxShadow="sm">
                    <Heading fontWeight={800} color={`${color}.500`} size={'2xl'}>£{remaining}</Heading>
                    <Text>remaining this month</Text>
                </Box>
            </SimpleGrid>
            <Progress colorScheme={color} height="60px" value={percent} borderRadius={12} mb={4} mt={8} />        
        </Box>
    )
}

export default ThisMonthProgress
