import { useState } from 'react';
import './app.css';
import TodoFolder from './TodoFolder/TodoFolder';
import TopBorder from './TopBorder/TopBorder';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';



const App = () => {

  const array = {arr : []}


  const dataBase = [
      {name : 'Productivity', id : 0, taskArr : []},
      {name : 'Assignments', id : 1,taskArr : []},
      {name : 'Work', id : 2,taskArr : []},
  ]

  const [data, setData] = useState(dataBase);

  const addTask = (e,text) => {
    if(text) {
      const i = e.target.parentElement.parentElement.parentElement.id;
      data[i].taskArr.push(text)
    }
    setData([...data])
  }

  const removeTask = (e) => {
      let index = e.target.parentElement.id;
      const arrNum = e.target.parentElement.parentElement.parentElement.id;
      data[arrNum].taskArr.splice(index,1);
      setData([...data])
  }

  return (
    <div className="app">
        <div className="app_container">
          <TopBorder/>
          {data.map(element => {
            return <TodoFolder 
                title = {element.name} 
                id={element.id}
                key = {uuidv4()}
                tasksArr = {element.taskArr}
                addTask = {addTask}
                removeTask = {removeTask}
            />
          })}
        </div>
    </div>
  );
}

export default App; 
