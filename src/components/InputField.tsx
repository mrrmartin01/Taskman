import React from 'react'



interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
    return (
        <form onSubmit={handleAdd} className='flex w-[90%] relative items-center'>
            <input type="input"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Enter a task'
                className='w-full text-black rounded-[2em] 
                py-3 px-6 text-lg border-none transition-[.2s]
                shadow-sm shadow-black focus:outline-none'
            />

            <button className='absolute w-10 h-10 m-3 rounded-full right-0 border-none text-md bg-yellow-500 transition-[.2s] shadow-md shadow-black hover:bg-yellow-400' type='submit'>Go</button>
        </form>
    )
}

export default InputField
