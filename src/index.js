import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var tainings = [
  {name:"web" , price:400} , 
  {name:"android" , price:500},
  {name:"ml" , price:700},
  {name:"ai" , price:4007},
  {name:"mc" , price:4060}
]

ReactDOM.render(
    <App trainings={tainings} /> ,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
