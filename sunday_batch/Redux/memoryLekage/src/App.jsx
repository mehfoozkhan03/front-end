import React from 'react'
import { Timer } from './Components/Timer'

export const App = () => {
  const [toggle,setToggle]=React.useState(null);
  return (
    <>
     {toggle && <Timer />}

      <button onClick={()=>setToggle(false)}>close</button>
      <button onClick={()=>setToggle(true)}>open</button>

    </>
  )
}
