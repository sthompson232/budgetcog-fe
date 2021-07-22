import { SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { axiosGet } from '../../utils/axios'
import MonthTile from './MonthTile'

const PastMonths = () => {
    const [pastMonths, setPastMonths] = useState([])

    useEffect(() => {
        axiosGet('get-past-months/').then(res => setPastMonths(res.data))
    }, [])

    return (
        <SimpleGrid spacing={6}>
            {pastMonths && pastMonths.map(month => (
                <MonthTile key={month.id} month={month} />
            ))}
        </SimpleGrid>
    )
}

export default PastMonths
