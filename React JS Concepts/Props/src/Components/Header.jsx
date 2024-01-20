//child component

import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <div>
        <p>Name :  {props.name}</p>
        <p>Age :  {props.age}</p>
        <p>Is Student  : {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}


//its a good practice that we should check the data types of props 
// although it wont stop running the application but gives a warning in the console

Header.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
}

Header.defaultProps = {
        name : "Guest",
        age : 0,
        isStudent : false,
}
export default Header