import React, { useContext, useEffect } from 'react'
import TodoList from '../components/todo/TodoList'
import { TodosContext } from '../context/context'

const Completed = () => {
  const { filterTodos, filteredTodos } = useContext(TodosContext)

  useEffect(() => {
    filterTodos('DONE')
  }, [])

  return (
    <>
      <h1 className='display-4 my-3'>Completed Todos</h1>
      {filteredTodos.length === 0 && (
        <div className=''>
          <h4 className='display-6 text-center'>
            No Completed Todos Are Found
          </h4>
        </div>
      )}
      <TodoList todos={filteredTodos} />
    </>
  )
}

export default Completed
