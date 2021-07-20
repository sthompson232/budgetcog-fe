import React from 'react'
import Sidebar from './sidebar/Sidebar'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Box } from '@chakra-ui/react'

const AppWrapper = ({page}) => {
    const variant = useBreakpointValue({ base: 'drawer', lg: 'sidebar'})
    const background = ''

    return (
        <div>
            <Sidebar variant={variant}/>
            <Box ml={variant === 'sidebar' ? 320 : 0} className='background-image' bg={!background ? 'gray.100' : ''} backgroundImage={background ? background : ''} p={6}>
                {page}
            </Box>
        </div>
    )
}

export default AppWrapper
