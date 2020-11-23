import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App(){
    return(
        <div>
             <h1>Hello World !!</h1>
             <button className="button">Click Me</button>
        </div>
       
    )
}

ReactDOM.render(<App />, document.getElementById('root'))