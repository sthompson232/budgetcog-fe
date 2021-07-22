import React, { useEffect, useState } from 'react'
import ExpenseList from './ExpenseList' 
import ThisMonthProgress from './ThisMonthProgress'
import ThisMonthPie from './ThisMonthPie'
import { axiosGet } from '../../utils/axios'
import { 
    Grid,
    GridItem,
    useBreakpointValue
} from '@chakra-ui/react'


const ThisMonth = () => {
    const [expenses, setExpenses] = useState()
    const [recurring, setRecurring] = useState()
    const variant = useBreakpointValue({ base: '1', md: '2', lg: '1', xl: '2' })

    useEffect(() => {
        axiosGet('this-month-expenses/').then(res => setExpenses(res.data))
        axiosGet('recurring-expenses/').then(res => setRecurring(res.data))
    }, [])

    const updateData = () => {
        axiosGet('this-month-expenses/').then(res => setExpenses(res.data))
        axiosGet('recurring-expenses/').then(res => setRecurring(res.data))
    }

    return (
        <Grid templateColumns={`repeat(${variant}, 1fr)`} gap={6}>
            <GridItem>
                <ThisMonthProgress expenses={expenses} recurring={recurring} />
                <ThisMonthPie expenses={expenses} recurring={recurring} />
            </GridItem>
            <GridItem>
                <ExpenseList expenses={expenses} updateData={updateData} />
                <ExpenseList expenses={recurring} recurring updateData={updateData} />
            </GridItem>
        </Grid>
    )
}

export default ThisMonth
