import styled from 'styled-components';


export const TypographHigh = styled.h1`
    font-size: 52px; text-align: center; margin-bottom: 0; height: 1.5em;
`;
export const TypographMedium = styled.h2`
    font-size: 36px; text-align: center; margin-bottom: 1em;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const Input = styled.input`
    width: 36em;
    margin: auto;
    padding: 0.5em;
`;

export const InputSubmit = styled.input`
    width: 37.2em;
    margin: auto;
    background-color: white;
    color: black;
    border: 0.5px solid #292929;
    padding: 0.5em;
    font-size: 1em;
    font-weight: bold;
    &:hover {
        background-color: #292929;
        color: white;
    }
`;

export const TextArea = styled.textarea`
     width: 36em;
     padding: 0.5em;
     margin: auto;
     height: 15em;
`;

