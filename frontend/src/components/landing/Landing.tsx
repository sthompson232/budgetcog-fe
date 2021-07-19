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
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react';
import Navbar from './Navbar'


const Landing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <Navbar />
            <Container maxW={'3xl'}>
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
                            fontSize={{ base: '2xl', sm: '5xl', md: '7xl' }}
                            lineHeight={'110%'}>
                            Save 
                            <Text as={'span'} color={'cyan.400'}> smarter </Text>
                            with BudgetCog.
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.500'}>
                            Use BudgetCog to manage and track your monthly expenses all in one place.
                        </Text>
                        <Flex justifyContent={'center'}>
                            <Button onClick={onOpen} colorScheme="cyan" boxShadow="md" size="lg" mr={8}>
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
                            <Button boxShadow="md" size="lg" mr={8}>
                                <Text>Learn More</Text>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Container>
        </div>
    )
}

export default Landing
