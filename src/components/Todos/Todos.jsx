/** @jsx jsx */
// import React from 'react';
import { jsx } from '@emotion/core';
import Todo from '../Todo/Todo';
import PropTypes from 'prop-types';
// import styles from './todos.module.css';
import * as styles from './todos.styles';

const Todos = ({ todos, completeTodo }) => {
   
    return (
        // <section className={styles.todos}>
        //     {todos.length > 0 &&
        //         todos.map((todo, index) => {
        //             return (
        //              <Todo 
        //              key={index} 
        //              text={todo.text}
        //              isCompleted={todo.isCompleted}
        //              completeTodo={completeTodo} 
        //              index={index}  
        //              />
        //             )
        //          })
        //     }
        //     {todos.length === 0 && (
        //         <div className={styles.todoPlaceholderText}>
        //             Add todo by clicking{" "}<span className={styles.addButtonPlaceholderText}>add</span>  button on the top left corner
        //         </div>
        //     )}
                                
        // </section>

        <section css={styles.todos}>
            {todos.length > 0 &&
                todos.map((todo, index) => {
                    return (
                     <Todo 
                     key={index} 
                     text={todo.text}
                     isCompleted={todo.isCompleted}
                     completeTodo={completeTodo} 
                     index={index}  
                     />
                    )
                 })
            }
            {todos.length === 0 && (
                <div css={styles.todoPlaceholderText}>
                    Add todo by clicking{" "}<span css={styles.addButtonPlaceholderText}>add</span>  button on the top left corner
                </div>
            )}
                                
        </section>
    );
};

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
    })),
    completeTodo: PropTypes.func.isRequired
}

export default Todos;