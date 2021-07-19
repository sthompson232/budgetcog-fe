import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { 
    Box,
    Heading,
    Flex
} from '@chakra-ui/react'
import getDate from '../../utils/date'


const Welcome = () => {
    const [currentHour, setCurrentHour] = useState('')
    let name = useSelector(state => {return state.user.firstName})

    const today = new Date()
    const curHour = today.getHours()

    useEffect(() => {
        if (curHour < 12) {setCurrentHour('morning')}
        else if (curHour < 18) {setCurrentHour('afternoon')}
        else {setCurrentHour('evening')}
    }, [curHour])
  
    return (
        <Box w='80%' bg='#ffffff'>
            <Flex justifyContent='space-between'>
                <Heading fontWeight={800}>Good {currentHour}, {name}.</Heading>
                <Heading>{getDate(today.getDay(), today.getMonth(), today.getFullYear())}</Heading>
            </Flex>
        </Box>
    )
}

export default Welcome
