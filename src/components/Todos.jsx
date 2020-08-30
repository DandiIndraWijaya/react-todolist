import React from 'react';
import Todo from './Todo';

const Todos = () => {
    const todos = [
        {
            text: "Belajar React"
        },
        {
            text: "Belajar props di react"
        },
        {
            text: "Belajar React Hooks"
        },
        {
            text: "Belajar State di React"
        },
        {
            text: "Belajar React lur"
        },
        {
            text: "Belajar React"
        },
        {
            text: "Belajar props di react"
        },
        {
            text: "Belajar React Hooks"
        },
        {
            text: "Belajar State di React"
        },
        {
            text: "Belajar React lur"
        },
    ];

    return (
        <section className="todos">
            {todos.map(todo => {
               return <Todo text={todo.text} />
            })}                    
        </section>
    );
};

export default Todos;