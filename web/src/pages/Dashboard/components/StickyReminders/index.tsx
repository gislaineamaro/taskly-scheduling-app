import React from 'react'

import { ReminderNote } from '@/components/ReminderNote'

import plusIcon from '@/assets/plus-icon.svg'
import './styles.scss'

export const StickyReminders = () => {
  return (
    <div className='sticky-reminders-container'>
      <div className='wrapper-reminder-headline'>
        <h1 className='reminders-section-headline'>Lembretes</h1>
        <span className='text-see-all-link'>Ver todos</span>
      </div>
      <div className='sticky-reminders-board'>
          <ReminderNote/>
          <ReminderNote/>
          <button className='button-add-new-sticky-note'>
            <div className='add-new-note-icon'>
              <img src={plusIcon} alt='Adicionar novo lembrete' />
            </div>
            Novo lembrete
          </button>
      </div>
    </div>
  )
}

export default StickyReminders