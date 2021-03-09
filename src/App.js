import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/main'
import CharacterPage from './pages/character'

import './App.css'

function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/char'>
          <CharacterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
