import React from 'react'
import { useState } from 'react'

function UseStateHook() {
    const [count, setCount] = useState(0)
 
                function increment ()
                {
                setCount(count+1);
                }
                function decrement ()
                {
                setCount(count-1);
                }
                function reset ()
                {
                setCount(0);
                }
return (
<>
<p style={{ textAlign: 'center' }} >{count}</p>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button>
<button onClick={increment}>Increment</button>

</>
)
}

export default UseStateHook