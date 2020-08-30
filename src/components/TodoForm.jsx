import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleForSubmit  = e => {
        e.preventDefault();

        if(!value){
            alert("No blank todo!");
            return;
        } 

        addTodo(value);
        setValue("")
    };

    return (
        <section className="add">
            <form className="add-form" onSubmit={handleForSubmit}>
                <input
                 value={value} 
                 onChange={e => setValue(e.target.value)} 
                 type="text" 
                 className="add-input">
                 </input>
                <button className="add-btn main-black-color">
                    Add
                </button>
            </form>
        </section>
    )
}

TodoForm.prototypes = {
    addTodo: PropTypes.func.isRequired
}

export default TodoForm;

