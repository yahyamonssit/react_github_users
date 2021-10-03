import React, { useContext, useEffect } from 'react'
import TodoList from '../components/todo/TodoList'
import { TodosContext } from '../context/context'

const Today = () => {
  const { filterTodos, filteredTodos } = useContext(TodosContext)

  useEffect(() => {
    filterTodos('DONE', 'TODAY')
  }, [])

  return (
    <>
      <h1 className='display-4 my-3'>Todays Todos</h1>
      {filteredTodos.length === 0 && (
        <div className=''>
          <h4 className='display-6 text-center'>No Todays Todos Are Found</h4>
        </div>
      )}
      <TodoList todos={filteredTodos} />
    </>
  )
}

export default Today
