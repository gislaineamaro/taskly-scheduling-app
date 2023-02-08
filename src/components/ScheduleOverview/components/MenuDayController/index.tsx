import React from 'react'

import chevronLeftIcon from '../../../../assets/chevron-left-24.png'
import chevronRightIcon from '../../../../assets/chevron-right-24.png'
import './styles.scss'

export const MenuDayController = () => {
  return (
    <div className='menu-day-container'>
      <button className='button-back-day'>
        <img src={chevronLeftIcon} alt="Voltar" />
      </button>
      <button className='button-next-day'>
        <img src={chevronRightIcon} alt="Avançar" />
      </button>
    </div>
  )
}

export default MenuDayController