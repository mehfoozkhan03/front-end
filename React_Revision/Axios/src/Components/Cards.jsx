import React from 'react'

export const Cards = ({User}) => {
    console.log(User)
  return (
    <div className=''>
        <div className='flex flex-col
        w-90 border bg-slate-400 text-slate-900 w-full h-50 p-3 rounded-2xl'>
            <p>{User.id}</p>
            <h3>{User.name}</h3>
            <h4>{User.email}</h4>
            <p>{User.body}</p>
        </div>
    </div>
  )
}
