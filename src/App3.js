import React from 'react'
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer1 from './Components/Footer1'


function App3(){
    return(
        <div className="row">
            <Header />
            <MainContent />
            <Footer1 />
        </div>
    )
}
ReactDOM.render(<App3 />,document.getElementById("root"))