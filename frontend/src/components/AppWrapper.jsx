import React, { useState, useEffect } from 'react'
import Sidebar from './sidebar/Sidebar'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Box, Container } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import pattern1 from '../static/images/pattern1.jpg'
import pattern2 from '../static/images/pattern2.jpg'

const AppWrapper = ({page}) => {
    const [background, setBackground] = useState()
    const backgroundId = useSelector(state => {return state.user.background})
    const variant = useBreakpointValue({ base: 'drawer', lg: 'sidebar'})

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
            default:
                setBackground(null)
        }
    }, [backgroundId])

    return (
        <div>
            <Sidebar variant={variant}/>
                <Box ml={variant === 'sidebar' ? 320 : 0} className='background-image' bg={!background ? 'gray.100' : ''} 
                backgroundImage={background} p={6}>
                    <Container maxW='1600px' px={0}>
                        {page}
                    </Container>
                </Box>
        </div>
    )
}

export default AppWrapper
