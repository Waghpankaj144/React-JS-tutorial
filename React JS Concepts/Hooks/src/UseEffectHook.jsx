import React, {useState, useEffect} from 'react'

function UseEffectHook() {

  const [count, setCount] = useState(0)

  // useEffect(funtion, [dependencies])
      // useEffect(()=>{},[value])


  useEffect(()=>{
    document.title=`Count: ${count}`;
  },[]) //if you dont want to make changes everytime funtion get re render then dont use value parameter
 

  // useEffect(()=>{
  //   document.title=`Count: ${count}`
  // },[])  //now only one time it will update after re rendering 
  
  
  function addCount (){
    setCount(c => c+1)
  }

  function subtractCount (){
    setCount(c => c-1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addCount}> Add</button>
      <button onClick={subtractCount}> Subtract</button>
    </div>
  )
}

export default UseEffectHook