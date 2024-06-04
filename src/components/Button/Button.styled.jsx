import styled from "styled-components";

export const PrimaryButton = styled.button`
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