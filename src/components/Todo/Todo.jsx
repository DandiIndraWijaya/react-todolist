/** @jsx jsx */
// import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
// import styles from './todo.module.css';
import * as styles from './todo.styles';
import { useTheme } from 'emotion-theming';

const Todo = ({text, completeTodo, index, isCompleted}) => {
    const theme = useTheme();

    return (
        // <div className={styles.todo} onClick={() => completeTodo(index)}>
        //     <span className={styles.todoText} style={{ textDecoration: isCompleted ? "line-through" : "initial" }}>{text}</span>
        // </div>

        <div css={styles.todo(theme)} onClick={() => completeTodo(index)}>
            <span css={styles.todoText} style={{ textDecoration: isCompleted ? "line-through" : "initial" }}>{text}</span>
        </div>
    )
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
}

export default Todo;