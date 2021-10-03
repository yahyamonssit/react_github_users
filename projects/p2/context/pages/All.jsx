import React, { useContext, useEffect } from 'react'
import TodoList from '../components/todo/TodoList'
import { TodosContext } from '../context/context'

const All = () => {
  const { todos } = useContext(TodosContext)
  return (
    <>
      <h1 className='display-4 my-3'>All Todos</h1>

      <TodoList todos={todos} />
    </>
  )
}

export default All
