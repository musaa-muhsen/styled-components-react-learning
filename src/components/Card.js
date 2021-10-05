import { StyledCard } from "./styles/Card.styled";


const Card = ({item: {id,title,body, image}}) => {
// condition = id %(modulus operator) 2 if that is equal to 0 so this expression is basically saying if id is even - if this is true then pass down 'row-reverse' 
    return ( 
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
           <div>
              <h2>{title}</h2>
              <p>{body}</p>
           </div>
           <div>
              <img src={`./images/${image}`} alt="" />
           </div>
        </StyledCard >
     );
}
 
export default Card;