import React, { useRef, useState, useEffect } from 'react'
import { 
    Box,
    Button,
    Text
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const SidebarButton = ({ to, name, icon }) => {
    const ref = useRef()
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (ref.current.classList.contains("active")) {
            setActive(true)
        } else {
            setActive(false)
        }
    })

    return (
        <Box py={1}>
            <NavLink exact to={to} activeClassName="active" ref={ref}>
                <Button w="100%" justifyContent="flex-start">
                    <Box pr={4}>
                        {icon}
                    </Box>
                    <Text color={active ? '#000000' : '#999999'}>{name}</Text>
                </Button>
            </NavLink>
        </Box>
    )
}

export default SidebarButton
