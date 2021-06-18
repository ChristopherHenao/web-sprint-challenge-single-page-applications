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

  const inputChange = (name, value) => {
    setFormValues({...formValues,[name]: value})
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      pepperoniTopping1: formValues.pepperoniTopping1,
      chickenTopping2: formValues.chickenTopping2,
      hamTopping3: formValues.hamTopping3,
      pineappleTopping4: formValues.pineappleTopping4,
      specialInstructions: formValues.specialInstructions
    }
    setOrders([newOrder, ...orders])
    setFormValues(initialValues)
  }


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
          change={inputChange}
          submit={formSubmit}
          />
        </Route>
      </Switch>
    </StyledApp>

  
  )
}

export default App;
