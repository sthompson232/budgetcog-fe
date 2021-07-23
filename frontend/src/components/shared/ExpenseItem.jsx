import React, { useState, useEffect } from 'react'
import { 
    Box,
    Flex,
    Text,
    Center,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalHeader,
    useDisclosure
} from '@chakra-ui/react'
import { getIconColor } from '../../utils/icons'
import ExpenseForm from './ExpenseForm';
import DeleteExpenseForm from './DeleteExpenseForm';


const ExpenseItem = ({ expense, updateData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [date, setDate] = useState()

    useEffect(() => {
        if (expense.date) {
            setDate(expense.date.split("-").reverse().join("/"))            
        }
    }, [expense.date]) 


    return (
        <Box onClick={onOpen} my={2} p={3} bg='white' borderRadius={12} borderWidth="1px" boxShadow="sm" _hover={{ bg: "#f6f6f6", cursor: "pointer" }}>
            <Flex alignItems='center' flexWrap='wrap' justifyContent='space-between'>
                <Flex alignItems='center' flexWrap='wrap'>
                    <Center mr={2} borderRadius={12} bg={getIconColor(expense.icon.name)} w='55px' h='55px' alignItems='center'>
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
                <Text color='gray.500'>{date && date}</Text>
            </Flex>

            <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader><Heading mt={4} fontWeight={900}>Manage your expense</Heading></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <ExpenseForm expense={expense} updateData={updateData} />
                        <hr />
                        <DeleteExpenseForm expense={expense} updateData={updateData} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ExpenseItem
