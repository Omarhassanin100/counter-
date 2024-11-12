import React, { act } from 'react'
import store from './store/Counter'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  
  const globalState = useSelector((stete)=>stete)
  // const show = useSelector((stete)=>stete)

const handleIncrease = ()=>{
  const action={type:"increase",payload:{number:1}}
  dispatch(action)

}
const handleDecrease = ()=>{
  if(globalState.counter===0){
    const action ={type:"zero"}
    dispatch(action)
  }else {
    const action={type:"decrease",payload:{number:1}}
    dispatch(action)
  }
  // const action= {type:"decrease",payload:{number:2}}
  // dispatch(action)
}
const showCounter =()=>{
  dispatch({type:"toggle"})
}

  return (
    <div>
    
    {globalState.showCounter ?
    <>
      <div>Counter:<span>{globalState.counter}</span></div>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      </>
    : ""
    }
      <button onClick={showCounter}>{globalState.showCounter?<span>HIDE</span>:<span>SHOW</span>}</button>
    </div>
  )
}

export default App
