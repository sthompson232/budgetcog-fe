import Login from '../auth/Login'
import {
    Box,
    Flex,
    Image
  } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import logo from '../../static/images/logo-light.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const variant = useBreakpointValue({ base: 'base', sm: 'sm'})

    return (
        <Box bg='black' px={6} py={3}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexWrap='wrap'>
                <Link to="/">
                    <Image htmlWidth={180} src={logo}></Image>
                </Link>
                {variant === 'sm' ? <Login /> : ''}
            </Flex>
        </Box>
    )
}

export default Navbar
