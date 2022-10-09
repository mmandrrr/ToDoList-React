import { useState } from 'react'
import './todoAdding.css'

const ToDoAdding = (props) =>  {

    const [value, setValue] = useState('')

    const inputValue = (e) => {
        const newValue = e.target.value
        setValue(newValue)
    }

    const clearInput = () => {
        const newValue = ""
        setValue(newValue)
    }

    const onEnterPress = (e,result) => {
        if(e.code === 'Enter') {
            result()
        } else {
            return ''
        }
    }

    return(
        <div className="goal_add">
            <input 
                onKeyDown={(e) => onEnterPress(e,() => {
                props.addTask(props.tasksArr,value)
                clearInput()
            })}
                onChange={(e) => inputValue(e)} 
                type="text" className="goal_add-input" 
                placeholder="Write a task..." 
                value={value}/>
            <div
                className='goal_add-btn'
                onClick={(e) => {
                    props.addTask(e,value)
                    clearInput()
            }}>Add</div>
        </div>
    )
}

export default ToDoAdding