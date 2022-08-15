import { Component } from 'react';

import './todoItem.css';
import checked from '../../../img/checkMark.svg'
import deleteIcon from '../../../img/delete-stop-svgrepo-com.svg'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkBoxClasses : 'goal_item-checbox-checked',
            itemTextClasses : 'goal_item-text'
        }
    }

    onCheckUncheckedBox = () => {
        this.setState({
            checkBoxClasses : this.state.checkBoxClasses + ' showed',
            itemTextClasses : this.state.itemTextClasses + ' done'
        })
    }

    onCheckCheckedBox = () => {
        this.setState({
            checkBoxClasses : this.state.checkBoxClasses.replace(/ showed/ig,''),
            itemTextClasses : this.state.itemTextClasses.replace(/ done/ig,'')
        })
    }


    render() {
        return(
            <div data-id={this.props.id} className="goal_item">
                <img 
                    src={deleteIcon} 
                    alt="delete-btn" 
                    className="goal_delete-btn"  
                    onClick={(e) => this.props.removeTask(e,this.props.tasksArr)}  
                />
                <div
                    onClick={this.onCheckUncheckedBox} 
                    className="goal_item-checbox"
                ></div>
                <img 
                    onClick={this.onCheckCheckedBox}
                    src={checked} alt="" 
                    className={this.state.checkBoxClasses} 
                />
                <div className={this.state.itemTextClasses}>{this.props.itemText}</div>  
            </div>
        )
    }
}

export default TodoItem