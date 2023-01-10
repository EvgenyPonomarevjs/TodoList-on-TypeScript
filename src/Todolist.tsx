import { title } from 'process';
import React from 'react';

type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}
type PropsTitle = {
    title: string;
    tasks: Array<TaskType>;
}

export function Todolist(props: PropsTitle){
    return <div>
      <h1>{props.title}</h1>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <div>
        <ul>
            <li><input type="checkbox" checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone}/><span>{props.tasks[2].title}</span></li>
        </ul>
      </div>
    </div>
  }