"use client"

import InputField from '@/components/InputField'
import { Task } from '@/components/Model';
import React, { useState } from 'react'

const App: React.FC = () => {

  const [task, setTask] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isDone: false }])
      setTask(" ");
    }

  };


  console.log(tasks)


  return (
    <div className='items-center flex flex-col h-screen w-screen'>
      <span className='uppercase text-md md:text-2xl  my-5 lg:my-4 z-1 text-center'>
        Taskman
      </span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
    </div>
  )
}

export default App
