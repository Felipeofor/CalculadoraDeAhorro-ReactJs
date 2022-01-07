import styled from 'styled-components';

const Button = styled.button`
    background-color: palevioletred;
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px; 
    cursor: pointer;

    &:hover {
        background-color: #FF6DD9;
        size: 1.5em;
        transition: 0.5s;
    }
`;

export default Button;