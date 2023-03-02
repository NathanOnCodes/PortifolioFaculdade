import * as Component from "../../types/HeaderStyles";


export const Header = () => {


    return (
        <Component.Head>
            <Component.Content>
                
                <Component.Typograph>
                    <Component.StyledLink  to={'/'} >
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

