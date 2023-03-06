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
    }
`
// export const contianerClass = css`
//     font-size: 700px;
// `

//const isContainerClass = contianerClass.getClassName();