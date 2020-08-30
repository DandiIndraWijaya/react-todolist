import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from './components/Paper'

function App() {
  return ( 
    <Paper>
         <section className="header">
                                <button className="header-btn main-black-color">
                                    Add
                                </button>
                                <h1 className="header-title">
                                    Todo Lists
                                </h1>
                                <button className="header-btn main-red-color">
                                    Clear
                                </button>
                            </section>

                            <section className="add">
                                <form className="add-form">
                                    <input type="text" className="add-input"></input>
                                    <button className="add-btn main-black-color">
                                        Add
                                    </button>
                                </form>
                            </section>

                            <section className="todos">
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                                <div className="todo">
                                    <span className="todo-text">Learning React</span>
                                </div>
                            </section>
    </Paper>
                           
  );
}

export default App;
