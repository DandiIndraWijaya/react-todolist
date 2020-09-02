import React, { useState } from 'react';

import Paper from '../components/Paper/PaperClass';
import Header from '../components/Header/HeaderClass';
import TodoForm from '../components/TodoForm/TodoForm';
import Todos from '../components/Todos/Todos';
import Container from '../layout/Container';

const TodoList = () => {
    const [ todos, setTodos] = useState([
        {
            text: "Belajar React",
            isCompleted: false
        },
        {
            text: "Belajar React",
            isCompleted: false
        },
        {
            text: "Belajar React",
            isCompleted: false
        },
        
    ]);

    const [showAdd, setShowAdd] = useState(false);
    

    const addTodo = value => {

        if(todos.length < 10){
            const addedTodo = [...todos, { text: value, isComplete: false}];

            setTodos(addedTodo);
        }else {
            alert("Only 10 todos is allowed!");
        }
        
    };

    const completeTodo = index => {
        const addedTodo = [...todos];
        addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

        setTodos(addedTodo);
    }

    const clearTodos = () => !showAdd && setTodos([]);

    const showAddToggle = () => setShowAdd(!showAdd);

  return ( 
    <Paper>
        <Container 
        direction="column" justifyContent="space-between"
        height='100%'>
            <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos} />
            <TodoForm addTodo={addTodo} showAdd={showAdd} />
            <Todos todos={todos} completeTodo={completeTodo} /> 
        </Container>
    </Paper>               
  );
}

export default TodoList;
