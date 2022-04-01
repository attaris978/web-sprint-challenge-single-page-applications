import { useState, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import formSchema from "../metaland/formSchema";
import axios from 'axios';

const Form = styled.form``;

const PizzaForm = (props) => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [pizzaData, setPizzaData] = useState({
    name: "",
    size: "Brobdingnagian",
    gumdrops: false,
    mackerel: false,
    peeps:false,
    squirrel:false,
    special: "",
  });
  const [formError, setFormError] = useState({
    name: "",
  });

  useEffect(() => {
    formSchema.isValid(pizzaData).then((valid) => setButtonEnabled(valid));
  }, [pizzaData]);

  const onChange = (event) => {
    const { name, type, value, checked } = event.target;
    const viableValue = type === "checkbox" ? checked : value;

    setPizzaData({ ...pizzaData, [name]: viableValue });

    Yup.reach(formSchema, [name])
      .validate(viableValue)
      .then((valid) => setFormError({ ...formError, [name]: "" }))
      .catch((err) => setFormError({ ...formError, [name]: err.errors[0] }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch("https://reqres.in/api/orders", {
      method: "POST",
      body: JSON.stringify(pizzaData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then(json => console.log(json))
      .catch((err) => console.error(err));
  
      
  };

  return (
    <Form id="pizza-form" onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="name-input">Name:</label>
      <input
        type="text"
        name="name"
        id="name-input"
        value={pizzaData.name}
        placeholder="Name of User"
        onChange={(e) => onChange(e)}
        maxLength="30"
      />
      {formError.name.length > 0 ? <p>{formError.name}</p> : null}
      <label htmlFor="size-dropdown">Pizza Size:</label>
      <select
        name="size"
        id="size-dropdown"
        onChange={(e) => onChange(e)}
      >
        <option value="Brabdingnagian">Brabdingnagian</option>
        <option value="Mean">Mean</option>
        <option value="Lilliputian">Lilliputian</option>
      </select>
     
      <label htmlFor="gumdrops">Gumdrops</label>
      <input
        type="checkbox"
        name="gumdrops"
        id="gumdrops"
        checked={pizzaData.gumdrops}
        onChange={(e) => onChange(e)}
      />

<label htmlFor="mackerel">Mackerel</label>
      <input
        type="checkbox"
        name="mackerel"
        id="mackerel"
        checked={pizzaData.mackerel}
        onChange={(e) => onChange(e)}
      />

<label htmlFor="peeps">Peeps</label>
      <input
        type="checkbox"
        name="peeps"
        id="peeps"
        checked={pizzaData.peeps}
        onChange={(e) => onChange(e)}
      />

<label htmlFor="squirrel">Squirrel</label>
      <input
        type="checkbox"
        name="squirrel"
        id="squirrel"
        checked={pizzaData.squirrel}
        onChange={(e) => onChange(e)}
      />

<label htmlFor="special-text">Special Instructions:</label>
      <input
        type="text"
        name="special"
        id="special-text"
        value={pizzaData.special}
        placeholder="If you simply have to have things your way..."
        onChange={(e) => onChange(e)}
        maxLength="300"
      />
      <button id="order-button" disabled={!buttonEnabled}>Submit!</button>
    </Form>
  );
};

export default PizzaForm;
