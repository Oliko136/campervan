import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 24px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
    padding: 24px;
    min-width: 448px;
    height: 532px;
`

export const FormTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const FormTitle = styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
`

export const FormSubtitle = styled.p`
    font-size: 16px;
    color: #475467;
`
export const FormInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const FormInput = styled.input`
    border-radius: 10px;
    border: none;
    padding: 18px;
    width: 400px;
    height: 56px;
    background-color: #f7f7f7;
    font-size: 16px;
    line-height: 1.25;

    &::placeholder {
        color: rgba(16, 24, 40, 0.6);
    }
`

export const FormTextarea = styled.textarea`
    border-radius: 10px;
    border: none;
    padding: 18px;
    width: 400px;
    height: 114px;
    background-color: #f7f7f7;
    font-size: 16px;
    line-height: 1.25;
    resize: none;

    &::placeholder {
        color: rgba(16, 24, 40, 0.6);
    }
`