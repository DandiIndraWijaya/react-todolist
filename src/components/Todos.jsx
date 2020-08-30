import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const Todos = ({ todos }) => {
   
    return (
        <section className="todos">
            {todos.map((todo, index) => {
               return <Todo key={index} text={todo.text} />
            })}                    
        </section>
    );
};

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
    }))
}

export default Todos;