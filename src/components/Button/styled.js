
import styled from 'styled-components';




const LoginButton = styled.div`
  width: 85%;
  height: 6rem;
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
  
`;

export default LoginButton;