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
        <div className=" w-[29%]">
            <form className='flex rounded-md mt-3 bg-[url(/bg.png)] bg-cover bg-center p-2'> single
                <span className='flex-1 p-1 flex-wrap border-none text-md focus:outline-none'>{task.task}</span>--text
                <div className="flex">
                    <span className='ml-2 text-md cursor-pointer'><RiEditFill /></span>icon
                    <span className='ml-2 text-md cursor-pointer'><RiDeleteBin5Fill /></span>
                    <span className='ml-2 text-md cursor-pointer'><RiCheckDoubleFill /></span>
                </div>
            </form>
        </div>

    )
}

export default SingleTasks