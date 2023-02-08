import React from 'react'

import plusIcon from '../../assets/plus-icon.svg'
import './styles.scss'

export const ButtonAddTask = () => {
  return (
    <button className='button-add-new-task'>
      <img src={plusIcon} alt="Adicionar nova atividade" />
    </button>
  )
}

export default ButtonAddTask