import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    height: 100px;
    display: flex;
    color: #101828;
    align-items: center;
    justify-content: center;
    background-color: #F7F7F7;
    border-bottom: 3px solid #E44848;
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const NavListLink = styled(NavLink)`
    padding: 40px 0;
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;

    &:hover,
    &:focus,
    &:active {
        color: #E44848;
    }
`