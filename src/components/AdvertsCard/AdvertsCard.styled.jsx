import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;

    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 20px;
    padding: 24px;
    width: 888px;
    height: 358px;
`
export const CardImageWrap = styled.div`
    min-width: 30%;
    min-height: 30%;
    align-self: stretch;
`

export const CardImage = styled.img`
    border-radius: 10px;
    width: 290px;
    height: 310px;
    object-fit: cover;
`

export const CardDetailsWrap = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

export const NamePrice = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: #101828;
`

export const ReviewsLocationWrap = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
`
export const ReviewsWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const ReviewsText = styled.p`
    font-size: 16px;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #101828;
`

export const LocationWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`
export const LocationText = styled.p`
    font-size: 16px;
    color: #101828;
`

export const CardDescription = styled.p`
    font-size: 16px;
    color: #475467;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 24px;
    
`