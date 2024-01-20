import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosGet() {

    const [userData, setUserData] = useState([]) 
  
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
        console.log(response)
        setUserData(response.data)
      })
    },[])

  return (
    <>
{
      userData.map((data)=>{
        return(
          <div>{data.name}</div>
        )
      })
    }
    </>
  )
}

export default AxiosGet