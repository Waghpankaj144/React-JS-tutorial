//Syntax
//const[state, dispatch] = useReducer(reducer, initalState);
                                    //  ||
                                    //  \/
                        //            reducer(currentState, action)

// useReducer and useState both are use for state managment but useReducer is used for complex state management

import React, { useReducer } from 'react'

const initialState=0;
const reducer=(currentState, action)=>{
        switch(action){
            case "Increment"  : 
            return currentState+1
            case "Decrement" : 
            return currentState-1
            default : 
            return currentState
        }
}

function UseReducerHook() {

   const[count, dispatch] =  useReducer(reducer, initialState)

  return (
    <div>
        <div>Count  :  {count}</div>
        <button onClick={()=>dispatch("Increment")} >Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </div>
  )
}

export default UseReducerHook