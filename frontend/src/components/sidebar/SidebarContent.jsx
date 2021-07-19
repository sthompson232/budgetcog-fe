import React from 'react'
import SidebarButton from '../shared/SidebarButton'

const SidebarContent = () => {

    return (
        <div>
            <SidebarButton to={'/'} name={'Dashboard'} icon={<i className="fas fa-lg fa-home"></i>}/>
            <SidebarButton to={'/settings'} name={'Settings'} icon={<i className="fas fa-lg fa-cog"></i>}/>
        </div>
    )
}

export default SidebarContent
