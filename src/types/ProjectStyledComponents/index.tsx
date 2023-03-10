import styled from "styled-components";


export const PreviouStyled = styled.div`
    width: 100%;
    display: flex;
    justify-Content: center;
    background-color: rgb(240, 239, 243);
    .ul{
        margin-top: 13%;
        margin-bottom: 82px;
        display: flex;
        justify-Content: center;
        gap: 18px;
        padding: 10px;
        text-decoration: blink;
        list-style: none;
        @media (max-width: 767px) {
            gap: 14px;
            padding: 7px;
        }
        
    }
    .previousClass{
        font-size: 21px;
        border-radius: 3px;
        border: 1px black solid;
        padding: 5px 15px;
        font-weight: bold;
        display: flex;
        align-items: center;
        background-color: black;
        color: white;
        @media (max-width: 767px) {
            font-size: 15px;
            padding: 3px 10px;
        }
        
    }
    .nextClass{
        font-size: 21px;
        border-radius: 3px;
        border: 1px black solid;
        padding: 5px 15px;
        font-weight: bold;
        display: flex;
        align-items: center;
        background-color: black;
        color: white;
        @media (max-width: 767px) {
            font-size: 15px;
            padding: 3px 10px;
        }
    }
    .li{
       list-style: none;
       display: flex;
       align-items: center;
    }
    .a {
        font-size: 21px;
        border: 1px black solid;
        padding: 5px 15px;
        background-color: black;
        color: white;
        border-radius: 3px;
        @media (max-width: 767px) {
            font-size: 15px;
            padding: 7px 10px;
        }
    }
`
export const TypegraphHigh = styled.h1`
    font-size: 3em;
    margin-left: 1.2em;
    @media (max-width: 767px) {
       font-size: 2em;
       margin-left: 0;
       display: flex;
       align-items: center;
       justify-content: center;

    }
`;
