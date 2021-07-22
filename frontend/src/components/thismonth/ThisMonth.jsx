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
import { useParams } from "react-router-dom";
import { getMonthAndYear } from '../../utils/date'


const ThisMonth = () => {
    const date = useParams()
    const [expenses, setExpenses] = useState()
    const [recurring, setRecurring] = useState()
    const { month, year } = getMonthAndYear()
    const variant = useBreakpointValue({ base: '1', md: '2', lg: '1', xl: '2' })

    useEffect(() => {
        axiosGet(`this-month-expenses/?month=${date.month}&year=${date.year}`).then(res => setExpenses(res.data))
        if (month === parseInt(date.month) && year === parseInt(date.year)) {
            axiosGet(`recurring-expenses/?month=${date.month}&year=${date.year}`).then(res => setRecurring(res.data))
        }
    }, [date, month, year])

    const updateData = () => {
        axiosGet(`this-month-expenses/?month=${date.month}&year=${date.year}`).then(res => setExpenses(res.data))
        if (month === parseInt(date.month) && year === parseInt(date.year)) {
            axiosGet(`recurring-expenses/?month=${date.month}&year=${date.year}`).then(res => setRecurring(res.data))
        }
    }

    return (
        <Grid templateColumns={`repeat(${variant}, 1fr)`} gap={6}>
            <GridItem>
                <ThisMonthProgress expenses={expenses} recurring={recurring} />
                <ThisMonthPie expenses={expenses} recurring={recurring} />
            </GridItem>
            <GridItem>
                <ExpenseList expenses={expenses} updateData={updateData} />
                {recurring &&
                <ExpenseList expenses={recurring} recurring updateData={updateData} />
                }
            </GridItem>
        </Grid>
    )
}

export default ThisMonth
