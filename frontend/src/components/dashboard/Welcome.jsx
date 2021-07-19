import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { 
    Box,
    Heading,
    Text,
    Button,
    Flex
} from '@chakra-ui/react'
import getDate from '../../utils/date'
import image from '../../static/images/magic.jpg'


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
        <Box w='100%' className='welcome-image' backgroundImage={image} py={8} px={4} borderRadius={12}>
            <Flex justifyContent='space-between' alignItems='center'>
                <Box>
                    <Heading size={'lg'} fontWeight={800} color='white'>Good {currentHour}, {name}.👋</Heading>
                    <Text size={'md'} color='#cccccc'>{getDate(today.getDay(), today.getMonth(), today.getFullYear())}</Text>
                </Box>
                <Button>Add an expense</Button>
            </Flex>
        </Box>
    )
}

export default Welcome
