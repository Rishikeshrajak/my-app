import React from 'react'
import ReactDOM from 'react-dom'


function App2() {
    const firstName = "Rishi"
    const lastName = "Rajak"
    return(
         <h1>Hello {firstName + " " + lastName}!</h1>
        // <h1>Hello {'${firstName} ${lastName}'}!</h1>
    )
}


ReactDOM.render(<App2 />,document.getElementById("root"))