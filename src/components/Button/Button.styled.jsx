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

export const SecondaryBtn = styled.button`
    border: 1px solid rgba(71, 84, 103, 0.2);
    border-radius: 200px;
    padding: 16px 32px;
    margin-top: 50px;
    min-width: 145px;
    height: 56px;

    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.01em;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        border: 1px solid #e44848;
    }
`