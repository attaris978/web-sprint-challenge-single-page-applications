import styled from 'styled-components';
import logo from "../images/pizzaLogo.png";
import {Link} from 'react-router-dom';
import {shopTitle} from '../metaland/toppings';

const Head = styled.div`
display:flex;
width:min(100vw, 960px);
& img {
    width:100%;
}
`;

const Header = (props) => {
    return (
        <Head>
        <Link to="/" ><img src={logo} alt="logo"/></Link>
        <img src={shopTitle} alt="Type-Coercion Pizzeria" />
        </Head>
    )
}

export default Header;