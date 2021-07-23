import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { 
    Box,
    Heading,
    Text,
    Flex
} from '@chakra-ui/react'
import { getDate, daysLeft, getMonthAndYear } from '../../utils/date'
import image from '../../static/images/magic.jpg'
import AddExpenseButton from '../shared/AddExpenseButton'


const Welcome = () => {
    const { month, year } = getMonthAndYear()
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
        <Box w='100%' className='welcome-image' backgroundImage={image} px={4} mb={6} borderRadius={12}>
            <Flex justifyContent='space-between' alignItems='center' flexWrap='wrap' py={4}>
                <Box my={4}>
                    <Heading size={'lg'} fontWeight={800} color='white'>Good {currentHour}, {name}.👋</Heading>
                    <Text mt={2} size={'md'} color='#dddddd'>{getDate(today.getDate(), today.getDay(), today.getMonth(), today.getFullYear())}. {daysLeft()}</Text>
                </Box>
                <AddExpenseButton recurring={false} month={month} year={year} />
            </Flex>
        </Box>
    )
}

export default Welcome
