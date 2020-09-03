import React from 'react';
import './App.css';
import { ThemeProvider } from 'emotion-theming';

import TodoList from './pages/TodoListClass';

const theme = {
  color: {
    primary: {
      black : '#484848',
      red: '#e06262'
    }
  },
  background: {
    color: {
      primary: '#f2eecb'
    }
  }
}

function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <TodoList /> 
    </ThemeProvider>            
  );
}

export default App;
