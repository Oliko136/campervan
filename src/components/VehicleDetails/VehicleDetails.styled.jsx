import styled from "styled-components";

export const VehicleDetailsWrap = styled.div``

export const VehicleDetailsTitle = styled.h3`
    position: relative;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 48px;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -24px;
        width: 100%;
        height: 1px;
        background-color: rgba(16, 24, 40, 0.1);
    }
`

export const VehicleDetailsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const VehicleDetailsItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
    text-transform: capitalize;
`

export const VehicleDetailsKey = styled.span``

export const VehicleDetailsValue = styled.span``