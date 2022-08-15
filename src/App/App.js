import { Component } from 'react';
import './app.css';
import TodoFolder from './TodoFolder/TodoFolder';
import TopBorder from './TopBorder/TopBorder';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data : [
        {name : 'Productivity',id : 0, taskArr : []},
        {name : 'Assignments',id : 1,taskArr : [],},
        {name : 'Work',id : 2,taskArr : [], },
      ],
      inputValue : ''
    }
  }

  addTask = (arr,text) => {
    if(text) {
      this.setState({
        taskArr : arr.push(text)
      });
    }
  }

  removeTask = (e,arr) => {
      let index = e.target.parentElement.getAttribute('data-id')
      this.setState({
        taskArr : arr.splice(index,1)
      })
  }

  render() {
    return (
      <div className="app">
          <div className="app_container">
            <div>{this.state.counter}</div>
            <TopBorder/>
            {this.state.data.map(element => {
              return <TodoFolder 
                  title = {element.name} 
                  id={element.id}
                  key = {element.id}
                  tasksArr = {element.taskArr}
                  addTask = {this.addTask}
                  removeTask = {this.removeTask}
              />
            })}
          </div>
      </div>
    );
  }
}

export default App; 
