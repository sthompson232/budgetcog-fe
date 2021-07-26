import React, { useState, useEffect } from 'react'
import {
    Box,
    Heading,
    Text,
    useBreakpointValue,
    Center,
    Spinner
} from '@chakra-ui/react'
import { getIconHexColor } from '../../utils/icons'

const StatisticTile = ({ number, sentence, icon, color }) => {
    const [num, setNum] = useState()

    useEffect(() => {
        if (number && number !== 'NaN') {
            setNum(number)
        }
    })
    
    const variant = useBreakpointValue({ 'base': '2xl', 'sm': 'xl', 'md': '2xl', 'xl': '3xl', '2xl': '2xl' })
    return (
        <Center position='relative' p={4} bg='white' borderRadius={12} boxShadow='md' minHeight={250}>
            {num ?
            <Box>
                <Box zIndex={1}>
                    <Heading textAlign='center' className="headings stats" size={variant} fontWeight={800} mb={2} color={`${color}.500`} >£{num}</Heading>
                    <Text fontSize={'lg'} color={'gray.500'} textAlign='center'>{sentence}</Text>
                </Box>
                <Box position='absolute' style={{ 'bottom': 20, 'left': 20, zIndex: '0' }}>
                    <i style={{ color: getIconHexColor(color), fontSize: {variant}, opacity: '20%' }} className={`fas fa-9x fa-${icon}`}></i>
                </Box>
            </Box>
            : 
            <Spinner size="xl" color={`${color}.500`} thickness="3px" />
            }
        </Center>
    )
}

export default StatisticTile
