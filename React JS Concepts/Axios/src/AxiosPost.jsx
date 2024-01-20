import axios from 'axios';
import React, { useState } from 'react'

function AxiosPost() {
const data = {Fname :"", Lname:"" };
const [inputData, setInputData] = useState(data)

const handleData =(e)=> {
        setInputData({...inputData, [e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
    .then((response)=> { 
        console.log(response);
    })
}

const handleUpdate=(e)=>{
    e.preventDefault()
    axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
    .then((response)=> { 
        console.log(response);
    })
}

const handleDelete=(e)=>{
    e.preventDefault()
    axios.put("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=> { 
        console.log(response);
    })
}

  return (
    <div>
        <label >FirstName :</label>
        <input type="text" name='Fname' value={inputData.Fname} onChange={handleData} /> <br />
        <label >LastName : </label>
        <input type="text" name='Lname' value={inputData.Lname} onChange={handleData} />
        <button onClick={handleSubmit} >Submit</button> <br />
        <button onClick={handleUpdate} >Update</button> <br />
        <button onClick={handleDelete} >Delete</button> <br />
    </div>
  )
}

export default AxiosPost