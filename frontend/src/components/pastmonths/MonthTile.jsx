import React from 'react'
import { 
    Box,
    Progress,
    Heading,
    Text
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { calculate_percentage } from '../../utils/sums'
import { Link } from 'react-router-dom'


const MonthTile = ({ month }) => {
    const color = useSelector(state => state.user.color)
    const budget = useSelector(state => state.user.budget)
    const percent = calculate_percentage(month.expense_total, budget)

    return (
        <Link to={`/month/${month.month}/${month.year}`}>
            <Box p={4} bg='white' borderRadius={12} boxShadow='md' _hover={{ bg: "gray.50" }}>
                <Heading className="headings stats" fontWeight={800} mb={2} color={`${color}.500`} >{month.name} {month.year}</Heading>
                <Text fontSize={'lg'}><b>£{month.expense_total}</b> spent of <b>£{budget}</b></Text>
                <Progress colorScheme={color} height="30px" value={percent} borderRadius={12} my={4} />
            </Box>
        </Link>
    )
}

export default MonthTile
