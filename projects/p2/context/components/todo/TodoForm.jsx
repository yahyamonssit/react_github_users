import React, { useContext, useState } from 'react'
import { TodosContext } from '../../context/context'

const TodoForm = () => {
  const { addTodo } = useContext(TodosContext)
  const [todoForm, setTodoForm] = useState({
    title: '',
    description: '',
    progress: 'TODO',
    date: 'TODAY',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (todoForm.title.trim() !== '') {
      addTodo(todoForm)
      console.log(todoForm)
    }
  }
  return (
    <>
      <form className='w-50'>
        <div className='mb-3'>
          <input
            value={todoForm.title}
            onChange={(e) =>
              setTodoForm({ ...todoForm, title: e.target.value })
            }
            placeholder='Title'
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <textarea
            value={todoForm.description}
            onChange={(e) =>
              setTodoForm({ ...todoForm, description: e.target.value })
            }
            placeholder='Description'
            type='text'
            className='form-control'
          ></textarea>
        </div>
        <div className='mb-3'>
          <select
            value={todoForm.progress}
            onChange={(e) =>
              setTodoForm({ ...todoForm, progress: e.target.value })
            }
            className='form-select'
          >
            <option value='TODO'>TODO</option>
            <option value='DOING'>DOING</option>
            <option value='DONE'>DONE</option>
          </select>
        </div>
        <div className='mb-3'>
          <select
            className='form-select'
            value={todoForm.date}
            onChange={(e) => setTodoForm({ ...todoForm, date: e.target.value })}
          >
            <option defaultValue='TODAY'>TODAY</option>
            <option value='TOMORROW'>TOMORROW</option>
          </select>
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          type='button'
          className='btn btn-primary'
        >
          Add todo
        </button>
      </form>
    </>
  )
}

export default TodoForm
