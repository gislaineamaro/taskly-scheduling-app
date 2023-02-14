import React, { useState } from 'react'
import './styles.scss'

export const ReminderNote = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const makeAccordionOpen = () => {
    setIsAccordionOpen(!isAccordionOpen)
  }

  return (
    <>
      {
        isAccordionOpen ? (
          <div className='closed-note-container' onClick={makeAccordionOpen}>
            <div className='sticky-emoji-container'>👱‍♀️</div>
            <h2 className='sticky-note-title'>Masma's Bday</h2>
            <h6 className='sticky-note-date-event'>26 de Abril</h6>
          </div>
        ) :
          (
            <div className='opened-note-container' onClick={makeAccordionOpen}>
              <div className='header-note-container'>
                <div className='sticky-emoji-container'>👱‍♀️</div>
                <div className='wrapper-note-headline'>
                  <h2 className='sticky-note-title'>Masma's Bday</h2>
                  <h6 className='sticky-note-date-event'>26 de Abril de 2023 - 09:00 AM</h6>
                  <span className='tag-text-category'>Personal</span>
                </div>
              </div>
              <p className='paragraph-sticky-note'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in impedit.
              </p>
            </div>)
      }
    </>
  )
}