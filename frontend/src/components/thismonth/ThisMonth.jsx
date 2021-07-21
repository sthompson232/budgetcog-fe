import React, { useEffect, useState } from 'react'
import ExpenseList from './ExpenseList' 
import ThisMonthProgress from './ThisMonthProgress'
import ThisMonthPie from './ThisMonthPie'
import { axiosGet } from '../../utils/axios'
import { 
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
                <ThisMonthProgress expenses={expenses} recurring={recurring} />
                <ThisMonthPie expenses={expenses} recurring={recurring} />
            </GridItem>
            <GridItem>
                <ExpenseList expenses={expenses} />
                <ExpenseList expenses={recurring} recurring />
            </GridItem>
        </Grid>
    )
}

export default ThisMonth
