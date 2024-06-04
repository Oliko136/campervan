import styled from "styled-components";
import { NavLink } from "react-router-dom";
import heroImage from '../../assets/images/camper-bg.jpg';

export const Hero = styled.div`
    display: flex;
    height: 100vh;
    background-image: url(${heroImage});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
`
export const HeroWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 32px;
    margin-left: auto;
    gap: 32px;
    width: 500px;
    height: 600px;
    text-align: center;
    background-color: rgba(255, 197, 49, 80%);
    border-radius: 30px;
`

export const HeroTitle = styled.h1`
    font-size: 40px;
`

export const HeroText = styled.p`
    font-weight: 500;
    font-size: 18px;
`

export const HeroLink = styled(NavLink)`
    border-radius: 200px;
    padding: 16px 40px;
    min-width: 166px;
    min-height: 56px;
    background-color: #e44848;
    
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.01em;
    color: #fff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: #d84343;
    }
`