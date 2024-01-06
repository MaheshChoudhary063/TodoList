"use client"
import { Main } from 'next/document'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [Dec, setDec] = useState("") 
  const [MainTask, setMainTask] = useState([])
  const submitHandler =(e)=>{
      e.preventDefault()
      setMainTask([...MainTask , {title,Dec}]); 
      settitle("")
      setDec("")
    } 

  const deleteHandler = (i) =>{
      let copytask =[...MainTask]
      copytask.splice(i,1)
      setMainTask(copytask)
  }
    let renderTask = <h2>No Task available</h2>

    if(MainTask.length>0){
    renderTask =MainTask.map((t,i)=>{
      return (
      <li key={i} className='flex item-center justify-between mb-8'>
      <div className='flex item-center justify-between w-2/3'>
        <h4 className='text-2xl font-semibold'>{t.title}</h4>
        <h6 className='text-xl font-semibold'>{t.Dec}</h6>
      </div>
      <button onClick={()=> {
        deleteHandler(i)
      }} className='bg-red-400 text-white px-4 py-2 rounded font-bold  '>Delete</button>
      </li>
      )
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Todolist</h1>
      <form onSubmit={submitHandler}>
      <input type='text'
       className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 '
        placeholder='Enter Title here' 
        value={title} onChange={(e)=>
        {
          settitle(e.target.value)
          }
        } 

        />
      <input type='text' 
      className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 '
      placeholder='Enter Description here'
      value={Dec} onChange={(e)=>
        {
          setDec(e.target.value)
          }
        }  />
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page