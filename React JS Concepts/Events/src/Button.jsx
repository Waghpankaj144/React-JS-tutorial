import React from 'react'

function Button() {

    const handleClick = () =>{
        console.log("Ouch !");
    }

    const handleClick2= (name) =>{
        console.log(`${name} you clicked me `);
    }

    let count = 0;
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }else{
            console.log(`${name} stop clicking me !!`);
        }
    }

    const handleClick4 = (e) => {e.target.textContent="ouch!"}
    const handleClick5 = (e) => {e.target.style.display = "none"}
  return (
    <div>
       <button className='bg-primary' onClick={handleClick}>Click me</button>
       <button className='bg-primary' onClick={ ()=>handleClick2("Bro")}>Click me2</button>
       <button className='bg-primary' onClick={ ()=>handleClick3("Bro")}>Click me3</button>
       <button className='bg-primary' onClick={ (e)=>handleClick4(e)}>Click me to change text</button>
       <button className='bg-primary' onClick={ (e)=>handleClick5(e)}>Click me to disappear</button>
    </div>
  )
}

export default Button