import React from 'react';
import './App.css';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TodoList from './pages/TodoList';
import About from './pages/About';

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
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>            
  );
}

export default App;
