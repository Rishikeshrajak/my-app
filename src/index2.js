import React from 'react';
import ReactDOM from 'react-dom';

const name = "Rishi";
const element = (
    <h1>Hello, Mr. {name}</h1>
    
);

ReactDOM.render(
        element,
        document.getElementById('root')
    );