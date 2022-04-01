import React from "react";
import {Route, Link} from 'react-router-dom';
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      <Link to="/pizzaForm" id="order-pizza">Order Online!</Link>
      <Route exact path="/" component={Home} />
      <Route path="/pizzaForm" component={PizzaForm} />
    </>
  );
};
export default App;
