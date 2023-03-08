import { NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Head = styled.div`
    width: 100%;
    height: 80px;
    background-color: #292929;
    
`;
export const Typograph = styled.li`
    font-size: 26px;
    font-weight: bold;
    @media (max-width: 767px) {
        font-size: 16px;
        text-align: center;
    }

`;

export const Content = styled.ul`
    gap: 26px;
    display: flex;
    margin-top: 22px;
    list-style: none;
    @media (max-width: 767px) {
       padding: 0;
       gap: 10px;
       justify-content: center;
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none; 
    color: white;   
    &.active{
        color: #7c7c7c;
    }
    &:hover{
        color: grey;
    }
`;