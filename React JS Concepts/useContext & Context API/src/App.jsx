import { createContext } from 'react';
import './App.css'
import ChildA from './ChildA';

//context api consist of CREATE,PROVIDER,CONSUMER 
//App.jsx is providing data so its provider and we are passing data directly to childC so, childC is consumer
//Context API is useful for passing only one value if there are multiple values it may become cmomplecated 
//because for every single value you have to use  data.provider tag, you cannot pass multiple values at one time 

const data = createContext();
const data1 = createContext();

function App() {
  
const name= " Pankaj Wagh ";
const gender = "Male"

  return (
    <>
    <data.Provider value={name}>
    <data1.Provider value={gender}>
      <ChildA />
      </data1.Provider>
      </data.Provider>
    </>
  )
}

export default App
export {data, data1}