//Parent component
import ChildA from "./Components/ChildA";
import Greetings from "./Components/Greetings";
import Header from "./Components/Header";

function App() {
  const name ="Pankaj";
  return (
    <>
      <Header name="Spongebob" age={30} isStudent={true} />
      <hr />
      <Header name="Doraemon" age={32} isStudent={false} />
      <hr />
      <Header name="Superman" age={50} isStudent={true} />
      <hr />
      <Header />
      <hr />
      <ChildA name={name}/> 

      <Greetings isLoggedin={true} username="BroCode"/>   
    </>
  );
}

export default App;

// React Props=>> Props stand for "Properties." They are read-only components. It is an object which stores
//  the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from 
//  one component to other components. It is similar to function arguments.


// Prop types=>> a mechanism that ensures that the passed value is of the correct datatype 
// age  = PropTypes.number 

//default props : default values in props in case the value is not passed from the parent component 
// name : "Guest"