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
`;

export const Content = styled.ul`
    margin-left: 240px;
    gap: 26px;
    display: flex;
    margin-top: 22px;
    list-style: none;
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