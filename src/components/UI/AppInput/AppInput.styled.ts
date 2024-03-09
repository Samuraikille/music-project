import styled from "styled-components";
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

interface IStyledInputProps {
  $isError: boolean;
}
export const SCAppInput = styled.input<IStyledInputProps>`
    color: white; 
    width: 300px;
    height: 35px;
    padding-left: 10px;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 5px;
    

&:hover {
    border: 2px solid white;
    outline: 0;
}
&:focus {
    border: 3.5px solid white;
    outline: 0;
}
`



