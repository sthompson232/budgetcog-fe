import React from 'react'
import { 
    Box, 
    Heading,
    Flex,
    Spinner
} from '@chakra-ui/react'
import ExpenseItem from '../shared/ExpenseItem'
import AddExpenseButton from '../shared/AddExpenseButton'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const ExpenseList = ({ expenses, recurring, updateData }) => {
    const color = useSelector(state => state.user.color)
    const date = useParams()

    return (
        <Box p={4} bg='white' borderRadius={12} boxShadow='md' mb={6}>
            {expenses ?
            <Box>
                <Flex justifyContent='space-between' alignItems='Box' mb={4} flexWrap='wrap'>
                    <Heading className="headings" fontWeight={800} size={'lg'}>{recurring ? 'Recurring' : 'Expenses'}</Heading>
                    <AddExpenseButton recurring={recurring} month={date.month} year={date.year} />
                </Flex>
                <Box>
                {expenses.map(expense => (
                    <ExpenseItem key={expense.id} expense={expense} updateData={updateData}/>
                ))}
                </Box>
            </Box>
            :
            <Flex justifyContent='center'>
                <Spinner justifyContent='center' size="xl" color={`${color}.500`} thickness="3px" />
            </Flex>
            
            }
        </Box>
    )
}

ExpenseList.defaultProps = {
    recurring: false
}

export default ExpenseList
