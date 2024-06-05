import styled from "styled-components";

export const ReviewsCard = styled.li``

export const ReviewsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
`
export const ReviewsAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    width: 60px;
    height: 60px;
    background-color: #f2f4f7;

    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: #e44848;
`
export const ReviewsNameRatingWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const ReviewsRatingWrap = styled.div`
    display: flex;
    gap: 4px;
`

export const ReviewsName = styled.h4`
    font-weight: 600;
    font-size: 18px;
    line-height: 1.33333;
`
export const ReviewsComment = styled.p`
    font-size: 16px;
    color: #475467;
`