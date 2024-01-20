import React, { useContext } from 'react'
import {data,data1} from './App'

function ChildC() {

  const FirstName = useContext(data)
  const gender = useContext(data1)

  return (
    <div>
      <data.Consumer>
        {
          //using contextAPI
          //inside consumer tag only functions are allowed and only one function is allowed that is why for multiple 
          // values ContextAPI is not recommended becauseyou have to write nested function and it will became 
          //like a callback hell


          (name)=>{
            return(
              <h1>My Name is : {name}</h1>
            )
          }
        }
      </data.Consumer>

      {/* using useContext() */}

      <h1>My name is {FirstName} and gender is {gender}</h1>
    </div>
  )
}

export default ChildC