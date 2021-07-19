import React, { useEffect } from 'react'
import Sidebar from './sidebar/Sidebar'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { axiosGet } from '../utils/axios'
import { Box } from '@chakra-ui/react'
import image from '../static/images/pattern1.jpg'

const AppWrapper = ({page}) => {
    const variant = useBreakpointValue({ base: 'drawer', lg: 'sidebar'})

    useEffect(() => {
        axiosGet('test/').then(res => console.log(res.data))
      }, [])

    return (
        <div>
            <Sidebar variant={variant}/>
            <Box ml={variant === 'sidebar' ? 320 : 0} className='background-image' backgroundImage={image}>
                {page}
            </Box>
        </div>
    )
}

export default AppWrapper
