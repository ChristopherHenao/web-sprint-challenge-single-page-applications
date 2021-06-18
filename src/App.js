import React, { useState } from "react"
import { Route, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import Form from './Form'
import NavBar from './NavBar'
import Styled from 'styled-components'


const App = () => {

  const StyledApp = Styled.div`
        text-align: center;
    ` 

  const initialValues = {
    name: '',
    size: '',
    pepperoniTopping1: false,
    chickenTopping2: false,
    hamTopping3: false,
    pineappleTopping4: false,
    specialInstructions: ''
  }

  const [ orders, setOrders ] = useState([])

  const [ formValues, setFormValues ] = useState(initialValues)


  return (
    <StyledApp>
      <NavBar/>
      
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>

        <Route exact path='/pizza'>
          <Form 
          values={formValues}
          
          />
        </Route>
      </Switch>
    </StyledApp>

  
  )
}

export default App;
