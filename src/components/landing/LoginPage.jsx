import React from 'react'
import { 
    Box,
    Heading,
    Container,
    Text,
    Stack
} from '@chakra-ui/react'
import Navbar from './Navbar'
import Login from '../auth/Login'
import pattern2 from '../../static/images/pattern4.jpg'


const LoginPage = () => {
    return (
    <Box className='background-image' backgroundImage={pattern2} minHeight='100vh'>
        <Navbar />
        <Container maxW={'md'}>
        <Stack 
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
            <Box p={4} bg='white' borderRadius={12} borderWidth="1px" boxShadow="md">
            <Heading
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Log in
          </Heading>
          <Text color={'gray.500'} py={6}>
            Log in with one click using your Google Account.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Login />
          </Stack>
            </Box>
        </Stack>
      </Container>
    </Box>
    )
}

export default LoginPage
