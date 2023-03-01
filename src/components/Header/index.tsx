import * as Component from "../../types/HeaderStyles";
import { Link, useLocation } from "react-router-dom";


export const Header = () => {

    const location = useLocation();
    console.log(location, 'location log')

    const setColorLocation = () => {
        if(location.pathname === '/'){

        }
    }

    return (
        <Component.Head>
            <Component.Content>
                
                <Component.Typograph>
                    <Component.StyledLink to={'/'}>
                        Home
                    </Component.StyledLink>
                </Component.Typograph>

                <Component.Typograph>
                    <Component.StyledLink to={"/about"}> Sobre mim </Component.StyledLink>
                </Component.Typograph>

                <Component.Typograph>
                    <Component.StyledLink to={"/projects"}> Projetos </Component.StyledLink>
                </Component.Typograph>
            </Component.Content>
        </Component.Head>
    )
}

