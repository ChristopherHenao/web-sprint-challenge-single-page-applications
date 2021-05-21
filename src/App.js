import React from "react";
import { Route, Link } from 'react-router-dom';
import Home from './Home'
import Form from './Form'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to="/"><button id="order-pizza">Home</button></Link>
      <Link to="/pizza"><button>Order Pizza</button></Link>


      

      <Route exact path="/" component={Home}/>
      <Route path="/pizza" component={Form}/>
    </>
  );
};
export default App;
