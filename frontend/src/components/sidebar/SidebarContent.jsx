import React from 'react'
import SidebarButton from '../shared/SidebarButton'
import { getMonthAndYear } from "../../utils/date"


const SidebarContent = () => {
    const { month, year } = getMonthAndYear()

    return (
        <div>
            <SidebarButton to={'/dashboard'} name={'Dashboard'} icon={<i className="fas fa-lg fa-home"></i>}/>
            <SidebarButton to={`/month/${month}/${year}`} name={'This Month'} icon={<i className="fas fa-lg fa-chart-pie"></i>}/>
            <SidebarButton to={'/past-months'} name={'Past Months'} icon={<i className="fas fa-lg fa-calendar-check"></i>}/>
            <SidebarButton to={'/settings'} name={'Settings'} icon={<i className="fas fa-lg fa-cog"></i>}/>
        </div>
    )
}

export default SidebarContent
