import './todoAdding.css'

const ToDoAdding = (props) => {
    return(
        <div className="goal_add">
            <input type="text" className="goal_add-input" placeholder="Write a task..."/>
            <button onClick={() => props.addTask(props.tasksArr,'hello')}>Click</button>
        </div>
    )
}

export default ToDoAdding