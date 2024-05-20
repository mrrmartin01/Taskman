import React from 'react'
import { Task } from './Model'

interface Props{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const  TaskList: React.FC<Props> = ({tasks, setTasks}) => {
  return (
    <div className='flex justify-evenly w-[90%] flex-wrap'>
      {
        tasks.map((task) => {
          return (
            <div key={task.id} className=''>
              <span>{task.task}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskList
