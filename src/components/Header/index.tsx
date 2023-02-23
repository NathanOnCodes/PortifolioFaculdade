import { NavLink } from "react-router-dom";
import * as Component from "../../types/HeaderStyles";


interface IHeader {
    style: Object
}

export const Header = (prop: IHeader) => {

    return (
        <Component.Head style={prop.style}>
            <Component.Content>
                <Component.Typograph>
                    <NavLink to={"/"} style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}> Home </NavLink>
                </Component.Typograph>

                <Component.Typograph>
                    <NavLink to={"/about"} style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}> Sobre mim </NavLink>
                </Component.Typograph>

                <Component.Typograph>
                    <NavLink to={"/projects"} style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}> Projetos </NavLink>
                </Component.Typograph>
            </Component.Content>
        </Component.Head>
    )
}

