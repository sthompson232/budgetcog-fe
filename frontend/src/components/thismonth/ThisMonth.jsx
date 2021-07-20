import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../utils/axios'
import { Box } from '@chakra-ui/react'

const ThisMonth = () => {
    const [expenses, setExpenses] = useState()

    useEffect(() => {
        axiosGet('this-month/').then(res => setExpenses(res.data))
    }, [])

    return (
        <Box p={4} bg='white' borderRadius={12}>
            <div>
            {expenses && expenses.map(expense => (
                <div key={expense.id}>{expense.name}</div>
            ))}
            </div>
        </Box>
    )
}

export default ThisMonth
