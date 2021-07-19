import Login from '../auth/Login'
import {
    Box,
    Flex,
    Image
  } from '@chakra-ui/react'
  import logo from '../../static/images/logo-light.png'

const Navbar = () => {
    return (
        <div>
            <Box bg='black' px={6} py={3}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Image htmlWidth={180} src={logo}></Image>
                    <Login />
                </Flex>
            </Box>
        </div>
    )
}

export default Navbar
