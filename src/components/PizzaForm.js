import {useState,useEffect} from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import formSchema from "../metaland/formSchema";

const Form = styled.form`

`;

const PizzaForm = (props) => {
    const [buttonEnabled, setButtonEnabled] = useState(false);
const [pizzaData,setPizzaData] = useState(
    {
        name:"",
        size:"Brobdingnagian",
        gumdrops:"true",
        mackerel:"true",
        special:""
    }
);
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
          .catch(err => setFormError({...formError, [name]:err.errors[0]}))
      };

      const onSubmit = (event) => {
        event.preventDefault();
      };

return (
    <Form onSubmit={(e) => onSubmit(e)}>
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
      
      <label htmlFor="pizzaSize">
        Pizza Size:
      </label>
      <input
        type="checkbox"
        name="pizzaSize"
        id="pizzaSize"
        checked={pizzaData.size}
        onChange={(e) => onChange(e)}
      />
      
      <label htmlFor="gumdrops">
        Gumdrops
      </label>
      <input
        type="checkbox"
        name="gumdrops"
        id="gumdrops"
        checked={pizzaData.gumdrops}
        onChange={(e) => onChange(e)}
      />
    </Form>
)
}

export default PizzaForm