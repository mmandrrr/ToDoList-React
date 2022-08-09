import folder from '../../img/folder.svg';
import arrowDown from '../../img/arrow-down.svg';
import './todoFolder.css';
import TodoItem from './ToDoItem/ToDoItem';
import ToDoAdding from './ToDoAdding/ToDoAdding';

const TodoFolder = (props) => {

    return(
        <div className="goal">
            <div className="goal_folder">
                <img className='goal_folder-icon' src={folder} alt="" />
                <div className="goal_folder-title">{props.title}</div>
                <div className="goal_folder-border"></div>
                <img src={arrowDown} alt="" className="goal_folder-arrow" />
            </div>
            <div className="goal_list">
                {props.tasksArr.map((element,i) => {
                    return <TodoItem 
                    itemText = {element}
                    key = {i}
                    />
                })}
                <ToDoAdding
                    addTask = {props.addTask}
                    tasksArr = {props.tasksArr}
                />
            </div>
        </div>
        
    )
}

export default TodoFolder