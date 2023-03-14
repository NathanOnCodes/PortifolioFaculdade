import styled from 'styled-components';

export const Container = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
     grid-auto-flow: column;
     grid-gap: 10px;
     @media screen and (max-width: 600px){
        &{
            grid-auto-flow: row;
        }
     }
`;

export const LowContainer = styled.div``

export const Content = styled.div`
    width: 100%;
`;


export const HighTypography = styled.h1`
    font-size: 2.5em;
    padding: 0 3em;
    @media screen and (max-width: 768px) {
        font-size: 1.6em;
    }
`;
export const MidTypography = styled.h2``;
export const LowTypography = styled.p`
    width: 20%
    text-align: center;
    padding: 0 3em;
    
    font-size: 1.8rem;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
    
`;
export const BtnSocialNetWork = styled.button` width: 540px; padding: 12px; margin: auto; `;
export const BtnCv = styled.input`display: none;`
export const LabelCv = styled.label``
export const ImgPrincipal = styled.img`
    transform: translateY(0);
    @keyframes developMotion{
        0%{
        transform: translateY(0px);
        }
        50%{
            transform: translateY(-10px)
        }
        100%{
            transform: translateY(0px);
        }
    }
    animation: developMotion 4s ease-in-out infinite;
    @media (max-width: 767px) {
        max-width: 300px;
    }
`;