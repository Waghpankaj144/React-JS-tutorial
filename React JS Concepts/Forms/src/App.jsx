//Controlled and Uncontrolled forms 
//Controlled components are handle by react components based on user inputs and Uncontrolled are handle 
//by the DOM but Controlled components are recommende to use 

import { useRef, useState } from 'react'

import './App.css'

function App() {
   {/* Controlled Components */}

  const [name, setName] = useState();
  const [pswd, setPswd] = useState();
  const [cpswd, setCpswd] = useState();

  function handleChange(e){
    
    
    // console.log(e.target.name);
    if(e.target.name === "FirstName"){
      setName((e.target.value).toUpperCase());
    }else if (e.target.name === "Password"){
      setPswd(e.target.value)
    } else{
      setCpswd(e.target.value)
    }
  }
 {/* Controlled Components */}

//  Uncontrolled components example
    const refObject = useRef();
    function handleSubmit (e) { 
        e.preventDefault();
       console.log(refObject.current.value);
    }
//  Uncontrolled components example
  return (
    <>
    {/* Controlled Components */}
     <form className='App'>
    <label>First Name : </label> <br />
    <input type="text"  name='FirstName' value={name} onChange={handleChange} /> <br />
    <label>Password : </label> <br />
    <input type="text" name='Password' value={pswd} onChange={handleChange} /> <br />
    <label>Confirm Password : </label> <br />
    <input type="text" name='Confirm Password' value={cpswd} onChange={handleChange} /> 
     </form>
 {/* Controlled Components */}


   {/* Uncontrolled components example */}
      <form onSubmit={handleSubmit}>
        <label >First Name: </label> <br />
        <input type="text" ref={refObject} />
        <button>Submit</button>
      </form>
  {/* Uncontrolled components example */}

    </>
  )
}

export default App
//for every new input field we dont have to declare new onchange funtion we can declare only one function
//and using only one event handler to update the states of all input fields by using "name" attribute inside input