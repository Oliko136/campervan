import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1200;
    background-color: rgba(17, 18, 19, 0.4);
`

export const ModalWindow = styled.div`
    position: relative;
    border-radius: 20px;
    padding: 40px;
    width: 982px;
    height: 720px;
    background-color: #fff;
    overflow-y: auto;
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;
    width: 32px;
    height: 32px;

    svg {
        pointer-events: none;
    }
`

