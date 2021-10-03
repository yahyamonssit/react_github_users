import React, { useContext } from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <>
      <ul className='list-group'>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
