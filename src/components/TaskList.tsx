import React from 'react'
import { Task } from './Model'
import SingleTasks from './SingleTasks';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className='flex justify-evenly w-[90%]  flex-wrap'>
      {tasks.map((task) => (
        <div key={task.id} className=''>
          <SingleTasks 
          task={task} 
          tasks={tasks} 
          setTasks={setTasks} />
        </div>
      ))}
    </div>
  )
}

export default TaskList
