import Login from '../auth/Login'
import {
    Box,
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Link,
    Image
  } from '@chakra-ui/react'
  import { Link as RouterLink } from 'react-router-dom'
import Navbar from './Navbar'
import dashboard from '../../static/images/dashboard.png'
import settings from '../../static/images/settings.png'
import current from '../../static/images/current.png'


const Landing = () => {

    return (
        <div>
            <Navbar />
            <Container maxW={'5xl'}>
                <Flex
                    className='hero-section'
                    alignItems="center"
                >
                    <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                        <Heading
                            className="hero-text"
                            fontWeight={900}
                            fontSize={{ base: '4xl', sm: '5xl', md: '8xl' }}
                            lineHeight={'110%'}>
                            Save 
                            <Text as={'span'} color={'cyan.400'}> smarter </Text>
                            with BudgetCog.
                        </Heading>
                        <Text fontSize={'2xl'} color={'gray.500'}>
                            Use BudgetCog to manage and track your monthly expenses all in one place.
                        </Text>
                        <Flex justifyContent={'center'} flexWrap='wrap'>
                            <RouterLink to='/dashboard'>
                                <Button colorScheme="cyan" boxShadow="md" size="lg" mx={8} mb={4} px={16}>
                                    <Text color="white">Get Started</Text>
                                </Button>
                            </RouterLink>
                            <Button boxShadow="md" size="lg" mx={8} mb={4} px={16}>
                                <Text>Learn More</Text>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
                
                <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">UI & UX</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '6xl'}} fontWeight={900} pb={2}>Smart UI. Visualised data.</Heading>
                    <Text fontSize={'2xl'} color={'gray.500'}>Track all of your data from the dashboard, with easy to understand graphs showing all of the most important data.</Text>
                </Box>
                <Image mb={12} borderRadius={12} src={dashboard} />
                {/* <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">DARK MODE</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '5xl'}} fontWeight={900} pb={2}>Dark mode included.</Heading>
                    <Text fontSize={'xl'} color={'gray.500'}>Don't strain your eyes with a blindingly white screen at 2am! Dark mode is available for an easier on the eyes experience. Whether you're a night owl or staring at computers all day.</Text>
                </Box> */}
                <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">CUSTOMISATION</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '6xl'}} fontWeight={900} pb={2}>Customise your space.</Heading>
                    <Text fontSize={'2xl'} color={'gray.500'}>Customise your profile with a custom colour theme and background image. You can also change your monthly budget and goal any time.</Text>
                </Box>
                <Image mb={12} borderRadius={12} src={settings} />
                <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">AUTHENTICATION</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '6xl'}} fontWeight={900} pb={2}>Don't forget another password.</Heading>
                    <Text fontSize={'2xl'} color={'gray.500'}>Use your Google account to log in to BudgetCog, so you don't have to worry about forgetting yet another password!</Text>
                </Box>
                <Image mb={12} borderRadius={12} src={current} />
                <Flex justifyContent="center">
                    <Box bg="gray.50" borderRadius="lg" p={8} my={16} textAlign="center">
                        <Heading size="2xl" fontWeight={900} pb={8}>Login now, and start saving today.</Heading>
                        <Login />
                    </Box>
                </Flex>
            </Container>
            <Box bg="gray.50" p={4}>
                <Text fontSize={'lg'}>© 2021 Copyright <b>BudgetCog</b> | Created by <Link color="cyan.400" href="https://samthompson.io" isExternal>samthompson.io</Link></Text>
            </Box>
        </div>
    )
}

export default Landing
