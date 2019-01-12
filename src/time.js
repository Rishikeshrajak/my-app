import React from 'react'
import ReactDOM from 'react-dom';

function App(){
    const date = new Date()
    const hours = date.getHours()
    let timeofDay
    const styles ={
        fontSize:30
    }

    if (hours <12){
        timeofDay = "morning"
        styles.color = "#04756F"
    }else
        if (hours >= 12 && hours < 17){
            timeofDay = "Afternoon"
            styles.color = "#2E0927"
        }else{
            timeofDay = "Night"
            styles.color = "#D90000"
        }


        return(
            <h1 style={styles}>Good {timeofDay}!</h1>
        )
           
}

ReactDOM.render(<App />,document.getElementById("root"))