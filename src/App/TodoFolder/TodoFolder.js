import { Component } from 'react';
import TodoItem from './ToDoItem/ToDoItem';
import ToDoAdding from './ToDoAdding/ToDoAdding';

import folder from '../../img/folder.svg';
import arrowDown from '../../img/arrow-down.svg';

import './todoFolder.css';


class TodoFolder extends Component{
    constructor(props) {
        super(props)

        this.state = {
            className : 'goal_list'
        }
    }
    
    onOpenList = () => {
        if(this.state.className === 'goal_list hide') {
            this.setState({
                className : this.state.className.replace(/ hide/,'')
            })
        } else {
            this.setState({
                className : this.state.className + ' hide'
            })
        }
    }

    render() {
        return(
            <div className="goal">
                <div className="goal_folder">
                    <img className='goal_folder-icon' src={folder} alt="" />
                    <div className="goal_folder-title">{this.props.title}</div>
                    <div className="goal_folder-border"></div>
                    <img 
                        src={arrowDown} 
                        alt="arrow-down" 
                        className="goal_folder-arrow" 
                        onClick={this.onOpenList}    
                    />
                </div>
                <div className={this.state.className}>
                    {this.props.tasksArr.map((element,i) => {
                        return <TodoItem 
                        itemText = {element}
                        key = {i}
                        id = {i}
                        tasksArr = {this.props.tasksArr}
                        removeTask = {this.props.removeTask}
                        />
                    })}
                    <ToDoAdding
                        addTask = {this.props.addTask}
                        tasksArr = {this.props.tasksArr}
                    />
                </div>
            </div>
            
        )
    }
}

export default TodoFolder