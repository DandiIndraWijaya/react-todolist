import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './todoform.module.css';
import cx from 'classnames';

const TodoForm = ({ addTodo, showAdd }) => {
    const [value, setValue] = useState("");

    const handleForSubmit  = e => {
        e.preventDefault();

        if(!value){
            alert("No blank todo!");
            return;
        }

        if(value.length > 40){
            alert("Please create a shorter todo text");
            setValue("");
            return;
        }

        addTodo(value);
        setValue("");
    };

    if(showAdd){
        return (
            <section className={styles.add}>
                <form className={styles.addForm} onSubmit={handleForSubmit}>
                    <input
                     value={value} 
                     onChange={e => setValue(e.target.value)} 
                     type="text" 
                     className={styles.addInput}>
                     </input>
                    <button className={cx(styles.addBtn, styles.mainBlackColor)}>
                        Add
                    </button>
                </form>
            </section>
        )
    }else{
        return null;
    }
    
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
}

export default TodoForm;

