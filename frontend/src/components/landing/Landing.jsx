import Login from '../auth/Login'
import {
    Box,
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Link,
    ModalHeader,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import Navbar from './Navbar'


const Landing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                            <Button onClick={onOpen} colorScheme="cyan" boxShadow="md" size="lg" mx={8} mb={4} px={16}>
                                <Text color="white">Get Started</Text>
                            </Button>
                            <Modal
                                isCentered
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent>
                                <ModalHeader><Heading fontWeight={900}>Log in</Heading></ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <Text pb={4}>Sign up with one click by linking your Google account to BudgetCog.</Text>
                                    <Login />
                                </ModalBody>
                                </ModalContent>
                            </Modal>
                            <Button boxShadow="md" size="lg" mx={8} mb={4} px={16}>
                                <Text>Learn More</Text>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
                <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">UI & UX</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '5xl'}} fontWeight={900} pb={2}>Smart UI. Visualised data.</Heading>
                    <Text fontSize={'xl'} color={'gray.500'}>Track all of your data from the dashboard, with easy to understand graphs showing all of the most important data, so you can make decisions that matter.</Text>
                </Box>
                <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">DARK MODE</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '5xl'}} fontWeight={900} pb={2}>Dark mode included.</Heading>
                    <Text fontSize={'xl'} color={'gray.500'}>Don't strain your eyes with a blindingly white screen at 2am! Dark mode is available for an easier on the eyes experience. Whether you're a night owl or staring at computers all day.</Text>
                </Box>
                <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">CUSTOMISATION</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '5xl'}} fontWeight={900} pb={2}>Customise your space.</Heading>
                    <Text fontSize={'xl'} color={'gray.500'}>Make your space your own, with fully customisable colours and backgrounds. Change anytime to give your dashboard a refreshing look!</Text>
                </Box>
                <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">PERFORMANCE</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '5xl'}} fontWeight={900} pb={2}>Ultra fast, smooth experience.</Heading>
                    <Text fontSize={'xl'} color={'gray.500'}>BudgetCog is client side rendered, which means you don't have to stare at a spinning wheel all day. </Text>
                </Box>
                <Box py={8}>
                    <Heading size="md" className="sub-heading" color="cyan.400">AUTHENTICATION</Heading>
                    <Heading size="2xl" fontSize={{base: '2xl', sm: '4xl', md: '5xl'}} fontWeight={900} pb={2}>Don't forget another password.</Heading>
                    <Text fontSize={'xl'} color={'gray.500'}>Use your Google account to log in to BudgetCog, so you don't have to worry about forgetting yet another password!</Text>
                </Box>
                <Flex justifyContent="center">
                    <Box bg="gray.50" borderRadius="lg" p={8} my={16} textAlign="center">
                        <Heading size="xl" fontWeight={900} pb={8}>Login now, and start saving today.</Heading>
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
