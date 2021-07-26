import { SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../utils/axios'
import MonthTile from './MonthTile'
import {
    Box,
    Skeleton,
    Stack
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'


const MonthSkeleton = ({ margin }) => {
    const color = useSelector(state => state.user.color)

    return (
        <Box my={margin && 6} p={6} bg='white' borderRadius={12} boxShadow='md' minHeight={214}>
            <Stack spacing="20px">
                <Skeleton w='25%' height="50px" />
                <Skeleton w='35%' height="30px" />
                <Skeleton borderRadius={12} startColor={`${color}.200`} endColor={`${color}.800`}  height="40px" />
            </Stack>
        </Box>
    )
}


const PastMonths = () => {
    const [pastMonths, setPastMonths] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosGet('get-past-months/').then(res => setPastMonths(res.data))
        .then(() => setLoading(false))
    }, [])

    return (
        <Box>
            {!loading ?
            <SimpleGrid spacing={6}>
                {pastMonths && pastMonths.map(month => (
                    <MonthTile key={month.id} month={month} />
                ))}
            </SimpleGrid>
            :
            <Box>
                <MonthSkeleton />
                <MonthSkeleton margin />
                <MonthSkeleton margin />
                <MonthSkeleton margin />
            </Box>
            }
        </Box>
    )
}

export default PastMonths
