import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
     grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
     grid-auto-flow: column;
     grid-gap: 10px;
     
`;

export const LowContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin: auto;

`

export const Content = styled.div`
    margin-top: 5%;
`;

export const HighTypography = styled.h1``;
export const MidTypography = styled.h2``;
export const LowTypography = styled.p`margin-left: 22px;`;


export const BtnSocialNetWork = styled.a` 
    display: flex;
    height: 3em;
    max-width: 600px;
    align-items: center; 
    text-decoration: none; 
    color: black;
    justify-content: center;
    text-decoration: none;
    text-align: center;
    border: 2px solid #292929;
    border-radius: .5rem;
    font-weight: 600;
    font-size: 16px;

    &:hover {
        background-color: #292929;
        color: white;
    }
    `
    ;



export const BtnCv = styled.input`display: none;`
export const LabelCv = styled.label``
export const ImgPrincipal = styled.img`
   transform: translateY(0);
    @keyframes developMotion{
        0%{
        transform: translateY(0px);
        }
        50%{
            transform: translateY(-30px)
        }
        100%{
            transform: translateY(0px);
        }
    }
    animation: developMotion 4s ease-in-out infinite;
`;


//#25292e