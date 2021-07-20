import React from 'react'
import { 
    Box,
    Flex,
    Text,
    Center,
    Heading
} from '@chakra-ui/react'

const ExpenseItem = ({ expense }) => {
    return (
        <Box my={2} p={3} bg='white' borderRadius={12} borderWidth="1px" boxShadow="sm" _hover={{ bg: "#f6f6f6", cursor: "pointer" }}>
            <Flex alignItems='center' flexWrap='wrap' justifyContent='space-between'>
                <Flex alignItems='center' flexWrap='wrap'>
                    <Center mr={2} borderRadius={12} bg='red' w='55px' h='55px' alignItems='center'>
                        <i className={`fas fa-2x fa-${expense.icon.icon}`} style={{ color: 'white' }}></i>
                    </Center>
                    <Box py={3} pr={2}>
                        <Heading fontWeight={800} fontSize={'lg'}>
                            £{expense.cost} - {expense.name}
                        </Heading>
                        <Text fontSize={'md'} color={'gray.500'}>
                            {expense.icon.name}
                        </Text>
                    </Box>
                </Flex>
                <Box py={1}>
                    {expense.date}
                </Box>
            </Flex>
        </Box>
    )
}

export default ExpenseItem
