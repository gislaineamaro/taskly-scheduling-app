import React from 'react'
import ScheduleOverview from './components/ScheduleOverview'
import TaskCard from '@/components/TaskCard'
import SideMenu from './components/SideMenu'

import './styles.scss'

export const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <SideMenu/>
      <div className='schedule-overview-container'>
        <ScheduleOverview/>
        <TaskCard/>
      </div>
    </div>
  )
}

export default Dashboard