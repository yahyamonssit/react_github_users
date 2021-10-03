import React from 'react'

const Todo = ({ id, title, progress, date }) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between'>
        <div>
          {id} - <strong>{title}</strong>
        </div>
        <span className='badge badge-sm bg-primary'>{progress}</span>
        <span className='badge badge-sm bg-primary'>{date}</span>
      </li>
    </>
  )
}

export default Todo
