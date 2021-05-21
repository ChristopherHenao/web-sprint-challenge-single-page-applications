import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import Styled from 'styled-components';
import Home from './Home'
import Form from './Form'


const GeneralStyles = Styled.div`
    text-align: center;
`


const App = () => {
  return (
    <GeneralStyles>
      <h1>Lambda Eats</h1>
      <Link to="/"><button id="order-pizza">Home</button></Link>
      <Link to="/pizza"><button>Order Pizza</button></Link>


      

      <Route exact path="/" component={Home}/>
      <Route path="/pizza" component={Form}/>
    </GeneralStyles>
  );
};


export default App;
