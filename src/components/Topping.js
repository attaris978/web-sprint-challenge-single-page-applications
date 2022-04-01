import styled from 'styled-components';

const Card = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:center;
background:radial-gradient(rgba(255,255,255,.8),rgba(255,255,255,0));
/* border-radius:8px; */
border-width:12px;
border-color:black;
margin:10px;
width:220px;
height:220px;
& img {
    align-self:center;
    height:200px;
    width:200px;
}
& label {
    font-size:20px;
    font-weight:700;
}

`;

const Topping = (props) => {
    const {name,image,onChange,pizzaData} = props;

return (
    <Card>
<label>{name}
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={pizzaData[name]}
        onChange={(e) => onChange(e)}
      />
      </label>
      {/* <label htmlFor="gumdrops">Gumdrops</label> */}
      <img src={image} alt={name}s/>
    </Card>
)

}

export default Topping;