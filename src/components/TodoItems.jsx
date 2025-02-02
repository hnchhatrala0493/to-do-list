import React from 'react'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle,checked}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <input type="checkbox" onClick={()=>{toggle(id)}} checked={isComplete ? "checked" : ""} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <button onClick={()=>{deleteTodo(id)}}>Delete</button>
    </div>
  )
}

export default TodoItems