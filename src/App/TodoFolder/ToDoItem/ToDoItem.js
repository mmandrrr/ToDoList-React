import { Component } from 'react';

import './todoItem.css';
import checked from '../../../img/checkMark.svg'

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
        console.log(this.state.checkBoxClasses);
    }

    onCheckCheckedBox = () => {
        this.setState({
            checkBoxClasses : this.state.checkBoxClasses.replace(/ showed/ig,''),
            itemTextClasses : this.state.itemTextClasses.replace(/ done/ig,'')
        })
    }


    render() {
        return(
            <div className="goal_item">
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