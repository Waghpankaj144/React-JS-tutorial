import React, {useState, useEffect, useRef} from 'react'

function UseRefHook() {

    const[myData, setMyData] = useState("")
    // const[count,setCount]=useState(0);

    const count = useRef(0);

    useEffect(()=>{
        // setCount(count+1);
        count.current = count.current+1
    })

  return (
    <div>

<input
type='text'
value={myData}
onChange={(e)=>setMyData(e.target.value)}
/>
<p>The number of times render : {count.current}</p>
    </div>
  )
}

export default UseRefHook