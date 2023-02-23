import react from 'react'
import './styles.scss'

export const Timeline = (isTaskDone: any) => {
  return (
    <div className='timeline-container'>
      <div className={`start-time ${isTaskDone? 'done-task': 'to-do-task'}`}></div>
      <input className='checkbox-task-default' type="checkbox"></input>
      <div className={`end-time ${isTaskDone? 'done-task': 'to-do-task'}`}></div>
    </div>
  )
}

export default Timeline
