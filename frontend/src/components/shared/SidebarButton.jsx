import React, { useRef, useState, useEffect } from 'react'
import { 
    Box,
    Button,
    Text
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'


const SidebarButton = ({ to, name, icon }) => {
    let location = useLocation()
    const ref = useRef()
    const [active, setActive] = useState(false)
    let userColor = useSelector(state => {return state.user.color})

    useEffect(() => {
        if (ref.current.classList.contains("active")) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [location])

    return (
        <Box py={1}>
            <NavLink exact to={to} activeClassName="active" ref={ref}>
                <Button w="100%" justifyContent="flex-start">
                    <Box pr={4}>
                        {icon}
                    </Box>
                    <Text fontWeight={500} color={active ? `${userColor}.400` : '#777777'}>{name}</Text>
                </Button>
            </NavLink>
        </Box>
    )
}

export default SidebarButton
