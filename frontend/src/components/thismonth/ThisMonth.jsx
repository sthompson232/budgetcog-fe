import React, { useEffect, useState } from 'react'
import ExpenseList from './ExpenseList' 
import { axiosGet } from '../../utils/axios'
import { 
    Box, 
    SimpleGrid
} from '@chakra-ui/react'


const ThisMonth = () => {
    const [expenses, setExpenses] = useState()
    const [recurring, setRecurring] = useState()

    useEffect(() => {
        axiosGet('this-month-expenses/').then(res => setExpenses(res.data))
        axiosGet('recurring-expenses/').then(res => setRecurring(res.data))
    }, [])

    return (
        <SimpleGrid columns={[1, 1, 2, 1, 2]} spacing={6}>
            <Box p={4} bg='white' borderRadius={12} boxShadow='md'>
                <h1>Pie Chat</h1>
            </Box>
            <ExpenseList expenses={expenses} />
            <Box>

            </Box>
            <ExpenseList expenses={recurring} recurring />
        </SimpleGrid>
    )
}

export default ThisMonth
