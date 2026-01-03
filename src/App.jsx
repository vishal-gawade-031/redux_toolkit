import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,decrement,increaseby5} from './redux/feature/countersilce'

const App = () => {

  const dispatch = useDispatch()

  const count = useSelector ((state)=>state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
          dispatch(increment())
      }}>
        increment</button>
      <button onClick={()=>{
          dispatch(decrement())
      }}>
        decrement</button>

        <button onClick={()=>{
            dispatch(increaseby5(10))
        }}>increaseby5</button>

    </div>
  )
}

export default App
