import React from 'react'
import { 
    Box, 
    Heading,
    Flex
} from '@chakra-ui/react'
import ExpenseItem from '../shared/ExpenseItem'
import AddExpenseButton from '../shared/AddExpenseButton'

const ExpenseList = ({ expenses, recurring }) => {
    return (
        <Box p={4} bg='white' borderRadius={12} boxShadow='md'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading className="headings" fontWeight={800} size={'lg'}>{recurring ? 'Recurring' : 'Expenses'}</Heading>
                <AddExpenseButton recurring={recurring} />
            </Flex>
            <Box>
            {expenses && expenses.map(expense => (
                <ExpenseItem key={expense.id} expense={expense}/>
            ))}
            </Box>
        </Box>
    )
}

ExpenseList.defaultProps = {
    recurring: false
}

export default ExpenseList
