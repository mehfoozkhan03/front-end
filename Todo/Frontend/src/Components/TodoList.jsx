import React from 'react'

import { useDispatch } from 'react-redux'
import { fetchTodo } from '../Redux/Slicer/Todoslicer';

const TodoList = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodo());
  }, [])

  return (
    <div>
      <h1>list</h1>
    </div>
  )
}

export default TodoList
