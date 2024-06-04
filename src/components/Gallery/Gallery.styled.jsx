import styled from "styled-components";

export const GalleryList = styled.ul`
    display: flex;
    gap: 16px;
`

export const GalleryItem = styled.li`
    img {
        border-radius: 10px;
        width: 290px;
        height: 310px;
        object-fit: cover;
    }
`