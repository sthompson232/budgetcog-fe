import Welcome from './Welcome'
import {
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import StatisticTile from '../shared/StatisticTile'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const color = useSelector(state => {return state.user.color})
    const budget = useSelector(state => {return state.user.budget})
    const total_saved = useSelector(state => {return state.user.total_saved})
    const goal = useSelector(state => {return state.user.goal})

    return (
        <Box>
            <Welcome />
            <SimpleGrid columns={[1, 2, 2, 2, 2, 4]} spacing={6}>
                <StatisticTile color={color} number={budget} sentence="Your monthly budget" icon='money-bill-wave' />
                <StatisticTile color={color} number={budget} sentence="Remaining this month" icon="wallet" />
                <StatisticTile color={color} number={total_saved} sentence="Saved overall" icon="piggy-bank" />
                <StatisticTile color={color} number={(goal - total_saved).toFixed(2)} sentence="left until you've reached your goal" icon="coins" />
            </SimpleGrid>
        </Box>
    )
}

export default Dashboard
