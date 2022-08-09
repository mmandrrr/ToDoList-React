import './todoItem.css';
import checked from '../../../img/checkMark.svg'

const TodoItem = (props) => {
    return(
        <div className="goal_item">
            <div className="goal_item-checbox"></div>
            <img src={checked} alt="" className="goal_item-checbox-checked hide" />
            <div className="goal_item-text">{props.itemText}</div>  
        </div>
    )
}

export default TodoItem