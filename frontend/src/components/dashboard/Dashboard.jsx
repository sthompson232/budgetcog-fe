import { useEffect, useState } from 'react'
import Welcome from './Welcome'
import {
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import StatisticTile from '../shared/StatisticTile'
import { useSelector } from 'react-redux'
import ThisMonthPie from '../thismonth/ThisMonthPie'
import { axiosGet } from '../../utils/axios'

const Dashboard = () => {
    const color = useSelector(state => {return state.user.color})
    const budget = useSelector(state => {return state.user.budget})
    const total_saved = useSelector(state => {return state.user.total_saved})
    const goal = useSelector(state => {return state.user.goal})
    const [expenses, setExpenses] = useState()
    const [recurring, setRecurring] = useState()

    useEffect(() => {
        axiosGet('this-month-expenses/').then(res => setExpenses(res.data))
        axiosGet('recurring-expenses/').then(res => setRecurring(res.data))
    }, [])

    return (
        <Box>
            <Welcome />
            <SimpleGrid columns={[1, 2, 2, 2, 2, 4]} spacing={6} mb={6}>
                <StatisticTile color={color} number={budget} sentence="Your monthly budget" icon='money-bill-wave' />
                <StatisticTile color={color} number={budget} sentence="Remaining this month" icon="wallet" />
                <StatisticTile color={color} number={total_saved} sentence="Saved overall" icon="piggy-bank" />
                <StatisticTile color={color} number={(goal - total_saved).toFixed(2)} sentence="left until you've reached your goal" icon="coins" />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 1, 1, 3, 3]} spacing={6}>
                <Box p={4} bg='white' borderRadius={12} boxShadow='md'></Box>
                <Box p={4} bg='white' borderRadius={12} boxShadow='md'></Box>
                <ThisMonthPie expenses={expenses} recurring={recurring} />
            </SimpleGrid>
        </Box>
    )
}

export default Dashboard
