import React from 'react'

import StickyReminders from '../StickyReminders'

import TasklySmallLogo from '@/assets/taskly-small-logo.svg'
import './styles.scss'

export const SideMenu = () => {
  return (
    <aside className='sidemenu-container'>
      <img className='taskly-logo-menu' src={TasklySmallLogo} alt="Taskly logo" />
      <StickyReminders/>
    </aside>
  )
}

export default SideMenu