import TodoItem from './ToDoItem/ToDoItem';
import ToDoAdding from './ToDoAdding/ToDoAdding';

import folder from '../../img/folder.svg';
import arrowDown from '../../img/arrow-down.svg';

import './todoFolder.css';
import { useState } from 'react';


const TodoFolder = (props) => {

    const [className, setClassName] = useState('goal_list');
    const [arrowPosition, setArrowPosition] = useState("goal_folder-arrow")
    
    const onOpenList = () => {
        if(className === 'goal_list hide') {
            const newClassName = className.replace(/ hide/,'')
            setClassName(newClassName)
        } else {
            const newClassName = className + ' hide'
            setClassName(newClassName)
        }
    }

    const onChangeArrow = () => {
        if(arrowPosition === 'goal_folder-arrow') {
            const newarrowPosition = arrowPosition + '-reverse'
            setArrowPosition(newarrowPosition)
        } else {
            const newarrowPosition = arrowPosition.replace(/-reverse/,'')
            setArrowPosition(newarrowPosition)
        }
    }

    const list = props.tasksArr.map((element,i) => {
                                return <TodoItem 
                                itemText = {element}
                                key = {i}
                                id = {i}
                                tasksArr = {props.tasksArr}
                                removeTask = {props.removeTask}
                                />
                            }) 

    return(
        <div className="goal" id={props.id}>
            <div className="goal_folder">
                <img className='goal_folder-icon' src={folder} alt="" />
                <div className="goal_folder-title">{props.title}</div>
                <div className="goal_folder-border"></div>
                <img 
                    src={arrowDown} 
                    alt="arrow-down" 
                    className={arrowPosition} 
                    onClick={() => {
                        onChangeArrow()
                        onOpenList()
                    }}    
                />
            </div>
            <div className={className}>
               {list}
                <ToDoAdding
                    addTask = {props.addTask}
                    tasksArr = {props.tasksArr}
                />
            </div>
        </div>
        
    )
}

export default TodoFolder