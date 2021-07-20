import Login from '../auth/Login'
import {
    Box,
    Flex,
    Image
  } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import logo from '../../static/images/logo-light.png'

const Navbar = () => {
    const variant = useBreakpointValue({ base: 'base', sm: 'sm'})

    return (
        <div>
            <Box bg='black' px={6} py={3}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexWrap='wrap'>
                    <Image htmlWidth={180} src={logo}></Image>
                    {variant === 'sm' ? <Login /> : ''}
                </Flex>
            </Box>
        </div>
    )
}

export default Navbar
