import React from 'react'
import { RiCheckDoubleFill, RiDeleteBin5Fill, RiEditFill } from 'react-icons/ri'
import { Task } from './Model';

type Props = {
    tasks: Task[];
    task: Task;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTasks = ({ tasks, task, setTasks }: Props) => {
    return (
        <form className='flex w-[29.5%] rounded-md mt-3'>
            <span>{task.task}</span>
            <div className="flex-1 p-1 border-none text-md bg-[url(https://source.unsplash.com/random/1600x900/?dark)] bg-cover bg-center rounded-md">
                <span className=''><RiEditFill /></span>
                <span className=''><RiDeleteBin5Fill /></span>
                <span className=''><RiCheckDoubleFill /></span>
            </div>
        </form>

    )
}

export default SingleTasks