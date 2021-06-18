import React from "react"
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Form from './Form'

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>

      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        
        <Route exact path='/pizza'>
          <Form/>
        </Route>
      </Switch>
    </div>

  
  )
}

export default App;
