import React, { useEffect } from 'react'
import { 
    Box 
} from '@chakra-ui/react'

const PastMonthsBar = ({ months }) => {

    useEffect(() => {
        if (months) {
            for (let i = 0; i < months.length; i++) {
                // console.log(months[i].name)
            }
        }
    }, [months])

    return (
        <Box p={4} bg='white' borderRadius={12} boxShadow='md'>
            {months && months.map(month => (
                <h1 key={month.id}>{month.name}</h1>
            ))}
        </Box>
    )
}

export default PastMonthsBar
