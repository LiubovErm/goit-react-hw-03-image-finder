import styled from 'styled-components';

export const Form = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.yellow};
`;

export const Input = styled.input`
  font-size:  ${props => props.theme.fontSizes.s};
  height: 40px;
  max-width: 250px;
  width: 100%;
  margin-right: ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.normal};

  &:hover,
  &:focus {
    outline-color: ${props => props.theme.colors.green};
  }
`;

export const Button = styled.button`
  cursor: pointer;  
  width: 45px;
  height: 45px;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  background-color:${props => props.theme.colors.green};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;