import styled from 'styled-components';
import Topping from "./Topping";
import toppingArray, {pizzaImage} from "../metaland/toppings";



const ToppingList = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:space-around;
/* background:radial-gradient(rgba(0,0,0,.1),rgba(255,255,255,1)); */
background-color:darkred;

`;

const Toppings = (props) => {

    const {onChange,pizzaData} = props;
    return (
        <ToppingList>
            {toppingArray.map(topping => <Topping name={topping.name} image={topping.image} onChange={onChange} pizzaData={pizzaData} key={topping.name}/> ) }
                     

        </ToppingList> 
    )
}

export default Toppings;