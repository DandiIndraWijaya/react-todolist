import React, { useState } from 'react';

import Paper from '../components/Paper/PaperClass';
import Header from '../components/Header/HeaderClass';
import TodoForm from '../components/TodoForm/TodoFromClass';
import Todos from '../components/Todos/TodosClass';
import Container from '../layout/Container';


class TodoList extends React.Component{
    
    state = {
        showAdd: false,
        todos: [{
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
        }]
    }

    addTodo = value => {
        const { todos } = this.state;
        if(todos.length < 10){
            const addedTodo = [...todos, { text: value, isComplete: false}];

            this.setState({
                todos: addedTodo
            });
        }else {
            alert("Only 10 todos is allowed!");
        }
        
    };

    completeTodo = index => {
        const { todos } = this.state;
        const addedTodo = [...todos];
        addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

        this.setState({
            todos: addedTodo
        });
    }

    clearTodos = () => {
        if(!this.state.showAdd) {
            this.setState({
                todos: []
            });
        }else{
            alert("Finish add todo before clear");
            return;
        }
    } 

    showAddToggle = () => this.setState({
        showAdd: !this.state.showAdd
    });;

    render(){
        return(
            <Paper>
                <Container 
                direction="column" justifyContent="space-between"
                height='100%'>
                    <Header showAddToggle={this.showAddToggle} showAdd={this.state.showAdd} clearTodos={this.clearTodos} />
                    <TodoForm addTodo={this.addTodo} showAdd={this.state.showAdd} />
                    <Todos todos={this.state.todos} completeTodo={this.completeTodo} /> 
                </Container>
            </Paper>    
        )
    }
}

export default TodoList;