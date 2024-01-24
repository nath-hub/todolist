import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { name:"Manger", completed:"true", id:"todo-0"},
  { name:"Dormir", completed:"false", id:"todo-1"},
  { name:"Recommencer", completed:"false", id:"todo-2"}
]
console.table()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App tasks = {DATA}/> 
  </React.StrictMode>
);
