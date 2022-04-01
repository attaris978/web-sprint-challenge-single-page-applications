import {useState,useEffect} from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import formSchema from "../metaland/formSchema";

const Form = styled.form`

`;

const PizzaForm = (props) => {
const [pizzaData,setPizzaData] = useState(
    {
        name:"",
        size:"Brobdingnagian",
        gumdrops:"true",
        mackerel:"true",
        special:""
    }
);

// onchange(event) => {

// }

return (
    <Form>
        <h2>Hello</h2>
    </Form>
)
}

export default PizzaForm