import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/main'
import Character from './pages/character'

import './App.css'

function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/char'>
          <Character />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
