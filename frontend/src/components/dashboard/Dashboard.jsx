import { useEffect, useState } from 'react'
import Welcome from './Welcome'
import {
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import StatisticTile from '../shared/StatisticTile'
import { useSelector } from 'react-redux'
import ThisMonthPie from '../thismonth/ThisMonthPie'
import PastMonthsBar from './PastMonthsBar'
import { axiosGet } from '../../utils/axios'
import GoalProgress from './GoalProgress'

const Dashboard = () => {
    const color = useSelector(state => {return state.user.color})
    const budget = useSelector(state => {return state.user.budget})
    const total_saved = useSelector(state => {return state.user.total_saved})
    const goal = useSelector(state => {return state.user.goal})
    const [currentExpenses, setCurrentExpenses] = useState()
    const [currentRecurring, setCurrentRecurring] = useState()
    const [pastMonths, setPastMonths] = useState()
    const [currentMonth, setCurrentMonth] = useState()
    const [remainingThisMonth, setRemainingThisMonth] = useState()

    useEffect(() => {
        axiosGet('get-current-month/').then(res => setCurrentMonth(res.data))
        .then(() => axiosGet('this-month-expenses/').then(res => setCurrentExpenses(res.data)))
        axiosGet('recurring-expenses/').then(res => setCurrentRecurring(res.data))
        axiosGet('get-past-months/').then(res => setPastMonths(res.data))
    }, [])

    useEffect(() => {
        if (currentMonth) {
            const remaining = budget - currentMonth.expense_total
            setRemainingThisMonth(remaining)
        }
    }, [currentMonth, budget])

    console.log(currentMonth)

    return (
        <Box>
            <Welcome />
            <SimpleGrid columns={[1, 2, 2, 2, 2, 4]} spacing={6} mb={6}>
                <StatisticTile color={color} number={budget} sentence="Your monthly budget" icon='money-bill-wave' />
                <StatisticTile color={color} number={remainingThisMonth} sentence="Remaining this month" icon="wallet" />
                <StatisticTile color={color} number={total_saved} sentence="Saved overall" icon="piggy-bank" />
                <StatisticTile color={color} number={(goal - total_saved).toFixed(2)} sentence="left until you've reached your goal" icon="coins" />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 1, 1, 3, 3]} spacing={6}>
                <GoalProgress total_saved={total_saved} goal={goal} color={color} />
                <PastMonthsBar months={pastMonths} color={color} />
                <ThisMonthPie expenses={currentExpenses} recurring={currentRecurring} />
            </SimpleGrid>
        </Box>
    )
}

export default Dashboard
