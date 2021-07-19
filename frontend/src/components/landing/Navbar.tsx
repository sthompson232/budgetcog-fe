import Login from '../auth/Login'
import {
    Box,
    Flex,
    Heading,
  } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <div>
            <Box bg='black' px={6} py={3}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Heading color="white">BudgetCog</Heading>
                    <Login />
                </Flex>
            </Box>
        </div>
    )
}

export default Navbar
