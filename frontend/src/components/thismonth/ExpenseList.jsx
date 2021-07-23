import React from 'react'
import { 
    Box, 
    Heading,
    Flex
} from '@chakra-ui/react'
import ExpenseItem from '../shared/ExpenseItem'
import AddExpenseButton from '../shared/AddExpenseButton'
import { useParams } from 'react-router'

const ExpenseList = ({ expenses, recurring, updateData }) => {
    const date = useParams()

    return (
        <Box p={4} bg='white' borderRadius={12} boxShadow='md' mb={6}>
            <Flex justifyContent='space-between' alignItems='center' mb={4} flexWrap='wrap'>
                <Heading className="headings" fontWeight={800} size={'lg'}>{recurring ? 'Recurring' : 'Expenses'}</Heading>
                <AddExpenseButton recurring={recurring} month={date.month} year={date.year} />
            </Flex>
            <Box>
            {expenses && expenses.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} updateData={updateData}/>
            ))}
            </Box>
        </Box>
    )
}

ExpenseList.defaultProps = {
    recurring: false
}

export default ExpenseList
