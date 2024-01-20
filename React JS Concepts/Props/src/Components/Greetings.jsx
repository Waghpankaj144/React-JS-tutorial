
//conditional rendering
import React from 'react'

function Greetings(props) {

    const welcomeMessage =   <h2>
        Welcome {props.username}
    </h2>

    const loginMessage = <h2>
        Please login to continue !
    </h2>

  return (
    props.isLoggedin ? welcomeMessage: loginMessage
  )
}

export default Greetings

