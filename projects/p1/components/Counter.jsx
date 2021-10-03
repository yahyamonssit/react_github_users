import React, { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)

  const increment = () => {
    // setTimeout(() => {
    //   setNumber((prev) => {
    //     return prev + 1
    //   })
    // }, 1000)

    setNumber((prev) => prev + 1)
  }
  const reset = () => {
    setNumber(0)
  }
  const decrement = () => {
    setNumber((prev) => prev - 1)
  }

  return (
    <>
      <h1 className='display-3 text-center'>Hello from counter</h1>

      <h4 className='fw-light display-1'>{number}</h4>
      <div className='btn-group'>
        <button onClick={increment} className='btn btn-sm btn-success'>
          Increment
        </button>
        <button onClick={reset} className='btn btn-sm btn-primary'>
          Reset
        </button>
        <button onClick={decrement} className='btn btn-sm btn-danger'>
          Decrement
        </button>
      </div>
    </>
  )
}
export default Counter
