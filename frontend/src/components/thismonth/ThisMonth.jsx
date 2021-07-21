import React, { useEffect, useState } from 'react'
import ExpenseList from './ExpenseList' 
import ThisMonthProgress from './ThisMonthProgress'
import { axiosGet } from '../../utils/axios'
import { 
    Box, 
    Grid,
    GridItem
} from '@chakra-ui/react'


const ThisMonth = () => {
    const [expenses, setExpenses] = useState()
    const [recurring, setRecurring] = useState()

    useEffect(() => {
        axiosGet('this-month-expenses/').then(res => setExpenses(res.data))
        axiosGet('recurring-expenses/').then(res => setRecurring(res.data))
    }, [])

    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
                <ThisMonthProgress expenses={expenses} recurring={recurring}/>
                <Box p={4} bg='white' borderRadius={12} boxShadow='md' mb={6}>
                    <h1>Pie Chat</h1>
                </Box>
            </GridItem>
            <GridItem>
                <ExpenseList expenses={expenses} />
                <ExpenseList expenses={recurring} recurring />
            </GridItem>
        </Grid>
    )
}

export default ThisMonth
