
import styled from 'styled-components';

const LoginButton = styled.div`
  width: 85%;
  margin-bottom: 2%;
  height: 5.5rem;
  background-color: blue;
  color: ${props => props.textColor || 'black'};
  background-color: ${props => props.backgroundColor || 'white'};
  border-color: ${props => props.backgroundColor || 'white'};
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;


  @media screen and (max-width: 500px) {
    font-size: 15px;
    height: 2.5rem;
    width: 90%;
  }

`;

export default LoginButton;