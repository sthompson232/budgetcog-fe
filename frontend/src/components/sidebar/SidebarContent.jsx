import React from 'react'
import SidebarButton from '../shared/SidebarButton'


const SidebarContent = () => {
    return (
        <div>
            <SidebarButton to={'/'} name={'Dashboard'} />
            <SidebarButton to={'/settings'} name={'Settings'}/>
        </div>
    )
}

export default SidebarContent
