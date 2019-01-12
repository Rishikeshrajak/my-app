import React from 'react'
import ReactDOM from 'react-dom'


function MyApp(){
     return(
        <ul>
        <li>1 Rishi</li>
        <li>2 Debasish</li>
        <li>3 Rahul</li>
        <li>4 Satya</li>
        <li>5 Sonu</li>
     </ul>
     )
}

ReactDOM.render(
    <MyApp />,
    document.getElementById("root")
)