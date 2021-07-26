import React, { useState, useEffect } from 'react'
import Sidebar from './sidebar/Sidebar'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Box, Container } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Settings from './settings/Settings'
import pattern1 from '../static/images/pattern1.jpg'
import pattern2 from '../static/images/pattern2.jpg'
import pattern3 from '../static/images/pattern3.jpg'
import pattern4 from '../static/images/pattern4.jpg'
import pattern5 from '../static/images/pattern5.jpg'
import pattern6 from '../static/images/pattern6.jpg'
import { axiosGet } from '../utils/axios'

const AppWrapper = ({page}) => {
    const [background, setBackground] = useState()
    const [newUser, setNewUser] = useState()
    const backgroundId = useSelector(state => {return state.user.background})
    const variant = useBreakpointValue({ base: 'drawer', lg: 'sidebar'})

    useEffect(() => {
        axiosGet('is-new-user/').then(res => setNewUser(res.data))
        }, [])

    const refreshUser = () => {
        axiosGet('is-new-user/').then(res => setNewUser(res.data)) 
    }

    useEffect(() => {
        switch(backgroundId) {
            case 0:
                setBackground(null)
                break
            case 1:
                setBackground(pattern1)
                break
            case 2:
                setBackground(pattern2)
                break
            case 3:
                setBackground(pattern3)
                break
            case 4:
                setBackground(pattern4)
                break
            case 5:
                setBackground(pattern5)
                break
            case 6:
                setBackground(pattern6)
                break
            default:
                setBackground(null)
        }
    }, [backgroundId])

    return (
        <Box>
            {newUser ?
            <Box className='background-image' bg={!background ? 'gray.100' : ''} 
            backgroundImage={background} p={6}>
                <Settings newUser refresh={refreshUser} />
            </Box>
            : 
            <Box>
                <Sidebar variant={variant}/>
                <Box ml={variant === 'sidebar' ? 320 : 0} className='background-image' bg={!background ? 'gray.100' : ''} 
                backgroundImage={background} p={6}>
                    <Container maxW='1600px' px={0}>
                        {page}
                    </Container>
                </Box>
            </Box>
            }
        </Box>
    )
}

export default AppWrapper
