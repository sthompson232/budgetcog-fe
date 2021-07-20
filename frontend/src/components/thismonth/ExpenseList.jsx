import React from 'react'
import { 
    Box, 
    Heading
} from '@chakra-ui/react'
import ExpenseItem from '../shared/ExpenseItem'

const ExpenseList = ({ expenses }) => {
    return (
        <Box p={4} bg='white' borderRadius={12}>
            <Heading className="headings" fontWeight={800} size={'lg'}>Expenses</Heading>
            <Box>
            {expenses && expenses.map(expense => (
                <ExpenseItem key={expense.id} expense={expense}/>
            ))}
            </Box>
        </Box>
    )
}

export default ExpenseList
