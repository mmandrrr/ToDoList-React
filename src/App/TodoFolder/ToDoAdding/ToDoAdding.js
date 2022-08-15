import { Component } from 'react'

import './todoAdding.css'

class ToDoAdding extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            value : ''
        }
    }

    inputValue = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    clearInput = () => {
        this.setState({
            value:""
        })
    }

    onEnterPress = (e,result) => {
        if(e.code === 'Enter') {
            result()
        } else {
            return ''
        }
    }

    render() {
        return(
            <div className="goal_add">
                <input 
                    onKeyDown={(e) => this.onEnterPress(e,() => {
                    this.props.addTask(this.props.tasksArr,this.state.value)
                    this.clearInput()
                })}
                    onChange={this.inputValue} 
                    type="text" className="goal_add-input" 
                    placeholder="Write a task..." 
                    value={this.state.value}/>
                <div
                    className='goal_add-btn'
                    onClick={() => {
                        this.props.addTask(this.props.tasksArr,this.state.value)
                        this.clearInput()
                }}>Add</div>
            </div>
        )
    }
}

export default ToDoAdding