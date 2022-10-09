import { useState } from 'react';

import './todoItem.css';
import checked from '../../../img/checkMark.svg'
import deleteIcon from '../../../img/delete-stop-svgrepo-com.svg'

const TodoItem = (props) => {

    const [checkBoxClasses, setCheckBoxClasses] = useState('goal_item-checbox-checked');
    const [itemTextClasses, setItemTextClasses] = useState('goal_item-text');

    const onCheckUncheckedBox = () => {
        const newCheckBoxClasses = checkBoxClasses + ' showed';
        const newItemTextClasses = itemTextClasses + ' done';
        setCheckBoxClasses(newCheckBoxClasses);
        setItemTextClasses(newItemTextClasses);
    }

    const onCheckCheckedBox = () => {
        const newCheckBoxClasses = checkBoxClasses.replace(/ showed/ig,'');
        const newItemTextClasses = itemTextClasses.replace(/ done/ig,'');
        setCheckBoxClasses(newCheckBoxClasses);
        setItemTextClasses(newItemTextClasses);
    }

    return(
        <div id={props.id} className="goal_item">
            <img 
                src={deleteIcon} 
                alt="delete-btn" 
                className="goal_delete-btn"  
                onClick={(e) => {
                    props.removeTask(e) 
                }}  
            />
            <div
                onClick={onCheckUncheckedBox} 
                className="goal_item-checbox"
            ></div>
            <img 
                onClick={onCheckCheckedBox}
                src={checked} alt="" 
                className={checkBoxClasses} 
            />
            <div className={itemTextClasses}>{props.itemText}</div>  
        </div>
    )
}

export default TodoItem