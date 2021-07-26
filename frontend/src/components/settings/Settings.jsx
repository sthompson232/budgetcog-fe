import React, { useState } from 'react'
import { 
    Box,
    Heading,
    Button,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from '@chakra-ui/react'
import ColorSelector from './ColorSelector'
import BackgroundSelector from './BackgroundSelector'
import BudgetForm from '../shared/BudgetForm'
import GoalForm from '../shared/GoalForm'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { axiosGet } from '../../utils/axios'
import { useHistory } from 'react-router-dom'


const Settings = ({ newUser, refresh }) => {
    let history = useHistory()
    const color = useSelector(state => state.user.color)
    const goal = useSelector(state => state.user.goal)
    const budget = useSelector(state => state.user.budget)
    const [alertOn, setAlertOn] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const submitButton= () => {
        if (budget !== '0.00' && goal !== '0.00') {
            setSubmitting(true)
            axiosGet('set-new-user/')
            setSubmitting(false)
            refresh()
            history.push('/add-recurring-expense')
        } else {
            setAlertOn(true)
        }
    }

    return (
        <Box p={4} bg='white' borderRadius={12}>
            <Heading className="headings" size={'xl'} fontWeight={800} mb={2}>{newUser ? 'Welcome!' : 'Settings'}</Heading>
            <hr />
            {newUser &&
            <Text color='gray.500' mt={4}>Welcome to BudgetCog, to start off with, you can set your monthly budget (how much money you have to spend each month) and your savings goal (how much of your budget you would like to be able to save). You can also customise your account with a colour theme and background image. Once you have finished, you can click the button to add your recurring expenses. You can also add 'one off' expenses for each individual month. BudgetCog will start with the month you signed up with.</Text>
            }
            <BudgetForm />
            <GoalForm />
            <ColorSelector />
            <BackgroundSelector />
            {alertOn &&
            <Alert my={6} status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Please set your budget and goal!</AlertTitle>
                <AlertDescription>You will need a budget and goal to proceed.</AlertDescription>
            </Alert>
            }
            {newUser &&
            <Link to='/add-recurring-expense'>
                <Button onClick={() => submitButton()} colorScheme={`${color}`} isLoading={submitting}>
                    <Text color='white'>Add your monthly expenses</Text>
                </Button>
            </Link>
            }
        </Box>
    )
}

export default Settings
