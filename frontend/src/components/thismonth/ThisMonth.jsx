import React, { useEffect, useState } from 'react'
import ExpenseList from './ExpenseList' 
import ThisMonthProgress from './ThisMonthProgress'
import ThisMonthPie from './ThisMonthPie'
import { axiosGet } from '../../utils/axios'
import { 
    Grid,
    GridItem,
    useBreakpointValue,
    Box,
    Heading
} from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { getMonthAndYear, getMonthName } from '../../utils/date'
import { useSelector } from 'react-redux'


const ThisMonth = () => {
    const color = useSelector(state => state.user.color)
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
        <>
        <Box w='100%' className='welcome-image' bg='white' p={4} mb={6} borderRadius={12}>
            <Heading textAlign='center' size={'2xl'} className="headings stats" fontWeight={800} py={2} color={`${color}.500`}>{getMonthName(month - 1)} {year}</Heading>
        </Box>
        <Grid templateColumns={`repeat(${variant}, 1fr)`} gap={6}>
            <GridItem>
                <ThisMonthProgress expenses={expenses} recurring={recurring} />
                {((expenses && expenses.length > 0) || (recurring && recurring.length > 0)) &&
                <ThisMonthPie expenses={expenses} recurring={recurring} />
                }
            </GridItem>
            <GridItem>
                <ExpenseList expenses={expenses} updateData={updateData} />
                {recurring &&
                <ExpenseList expenses={recurring} recurring updateData={updateData} />
                }
            </GridItem>
        </Grid>
        </>
    )
}

export default ThisMonth
