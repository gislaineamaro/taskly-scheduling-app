import React from 'react'

import ButtonAddTask from '../ButtonAddTask'
import MenuDayController from './components/MenuDayController'
import './styles.scss'

export const ScheduleOverview = () => {
  return (
    <div className='schedulling-overview-container'>
      <header className='schedule-healine'>
        <h1 className='title-schedule-headline'>Planejamento do dia</h1>
        <div className="wrapper-info-actual-day">
          <span className='text-actual-day'>Quinta-feira 12</span>
          <MenuDayController/>
        </div>
      </header>
      <ButtonAddTask/>
    </div>
  )
}

export default ScheduleOverview