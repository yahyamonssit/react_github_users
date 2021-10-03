import React, { useState, createContext, useEffect } from 'react'

import { data } from '../data'

// initilise a context instance
export const TodosContext = createContext()

// initilise a context instance
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(data)
  const [filteredTodos, setFilteredTodos] = useState([])

  // create todo
  const addTodo = (todoFormInputs) => {
    const todo = {
      id: Date.now(),
      ...todoFormInputs,
    }

    setTodos([todo, ...todos])
  }

  // show all completed todos
  const filterTodos = (progress, date) => {
    setFilteredTodos(
      todos.filter((todo) => todo.progress === progress || todo.date === date)
    )
  }

  const values = {
    todos,
    addTodo,
    filterTodos,
    filteredTodos,
  }
  return <TodosContext.Provider value={values} children={children} />
}
