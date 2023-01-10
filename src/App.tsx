import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './Todolist';

function App() {
  let tasks = [
    {id: 1, title:"HTML", isDone: true},
    {id: 2, title:"CSS", isDone: true},
    {id: 3, title:"JS", isDone: false}
  ]
  return (
    <div className="App">
      <Todolist title = "Новые задачи" tasks={tasks}/>
      <Todolist title = "Выполняются" tasks={tasks}/>
      <Todolist title = "Выполненые" tasks={tasks}/>
    </div>
  );
}

export default App;
