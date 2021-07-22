import React from 'react'
import {
    Box,
    Heading,
    Text,
    useBreakpointValue,
    Center,

} from '@chakra-ui/react'

const StatisticTile = ({ number, sentence, icon, color }) => {
    const variant = useBreakpointValue({ 'base': '2xl', 'sm': 'xl', 'md': '2xl', 'xl': '3xl', '2xl': '2xl' })
    return (
        <Center position='relative' p={4} bg='white' borderRadius={12} boxShadow='md' minHeight={250}>
            <Box zIndex={1}>
                <Heading textAlign='center' className="headings stats" size={variant} fontWeight={800} mb={2} color={`${color}.400`} >£{number}</Heading>
                <Text fontSize={'lg'} color={'gray.500'} textAlign='center'>{sentence}</Text>
            </Box>
            <Box position='absolute' style={{ 'bottom': 20, 'left': 20, zIndex: '0' }}>
                <i style={{ color: color, fontSize: {variant}, opacity: '20%' }} className={`fas fa-9x fa-${icon}`}></i>
            </Box>
        </Center>
    )
}

export default StatisticTile
