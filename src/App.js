import React from "react";
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import PizzaForm from "./components/PizzaForm";
import Home from "./components/Home";
import Header from "./components/Header";


const AppContainer = styled.div`
  display:flex;
  flex-flow:column nowrap;
  
  
  text-align: center;
  

`

const App = () => {
  return (
    <AppContainer>
      <Header />
      {/* <Link to="/">Home</Link> */}
      <Link to="/pizza" id="order-pizza">Order Online!</Link>
      <Route exact path="/" component={Home} />
      <Route path="/pizza" component={PizzaForm} />
    </AppContainer>
  );
};
export default App;
