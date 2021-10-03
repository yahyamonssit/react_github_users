import React, { useContext, useEffect } from 'react'
import TodoList from '../components/todo/TodoList'
import { TodosContext } from '../context/context'

const Tomorrow = () => {
  const { filterTodos, filteredTodos } = useContext(TodosContext)

  useEffect(() => {
    filterTodos(null, 'TOMORROW')
  }, [])

  return (
    <>
      <h1 className='display-4 my-3'>Tomorrow Todos</h1>
      {filteredTodos.length === 0 && (
        <div className=''>
          <h4 className='display-6 text-center'>No Tomorrow Todos Are Found</h4>
        </div>
      )}
      <TodoList todos={filteredTodos} />
    </>
  )
}

export default Tomorrow
