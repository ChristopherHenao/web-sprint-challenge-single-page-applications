import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import Styled from 'styled-components';
import Home from './Home'
import Form from './Form'
import Order from './Orders'
import axios from 'axios';


const GeneralStyles = Styled.div`
    text-align: center;
`
const initialOrders = [
  {
  name: "Test Order",
  size: "large",
  topping1: true,
  topping2: false,
  topping3: true,
  topping4: false,
  special: "Please work",
} 
]

const initialValue = {
  name: "",
  size: "",
  topping1: Boolean,
  topping2: Boolean,
  topping3: Boolean,
  topping4: Boolean,
  special: "",
} 


const App = () => {

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialValue)


  
  const postNewOrder = newOrder => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios.post('http://buddies.com/api/friends', newOrder)
      .then(res => {
        setOrders([res.data, ...orders])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialValue)
      })
  }


  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.checked,
      topping2: formValues.checked,
      topping3: formValues.checked,
      topping4: formValues.checked,
      special: formValues.special.trim(),
    }
    postNewOrder(newOrder)
  }


  return (
    <GeneralStyles>
      <h1>Lambda Eats</h1>
      <Link to="/"><button id="order-pizza">Home</button></Link>
      <Link to="/pizza"><button>Order Pizza</button></Link>


      

      <Route exact path="/" component={Home}/>
      <Route path="/pizza">
        <Form  
        values={formValues}
        change={inputChange}
        submit={formSubmit}/>
      </Route>

      {orders.map(order => {
        return (<Order order={order}/>)
      })}
    </GeneralStyles>
  );
};


export default App;
