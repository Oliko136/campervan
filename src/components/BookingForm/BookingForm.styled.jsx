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
    padding: 18px 0 18px 18px;
    width: 400px;
    height: 56px;
    background-color: #f7f7f7;
    font-size: 16px;
    line-height: 1.25;

    &::placeholder {
        color: rgba(16, 24, 40, 0.6);
    }
`
export const FormCalendarWrap = styled.div`
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        right: 18px;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .react-datepicker {
        font-family: inherit;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #fff;
        border: 1px solid rgba(16, 24, 40, 0.2);
        border-radius: 12px;
        padding: 16px;
        width: 325px;
    }
    
    .react-datepicker-popper > svg {
        display: none;
    }

    .react-datepicker-popper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .react-datepicker__month-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 293px;
    }

    .react-datepicker__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        width: 293px;
        height: 58px;
    }
    
    .react-datepicker__current-month {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.2;
        margin-bottom: 20px;
    }
 
    .react-datepicker__day-names {
        display: flex;
        gap: 10px;
    }

    .react-datepicker__day-name {
        width: 100%;
        font-weight: 600;
        font-size: 12px;
        line-height: 1.2;
        text-align: center;
        color: #475467;
        text-transform: uppercase;
    }

    .react-datepicker__day {
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: -0.02em;
        width: 22px;
        height: 22px;
        margin: 0;
        border-radius: 50px;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
    }

    .react-datepicker__day:hover,
    .react-datepicker__day:focus {
        background-color: #d84343;
        color: #fff;
    }

    .react-datepicker__day--outside-month {
        color: #475467;
    }

    .react-datepicker__day--today {
        border-radius: 50px;
        text-align: center;
    }

    .react-datepicker__day--selected {
        background-color: #E44848;
        color: #fff;
        border-radius: 50px;
    }

    .react-datepicker__week {
        display: flex;
    }

    .react-datepicker__week > * {
        flex: 1;
        margin-right: 8px;
    }

    .react-datepicker__week > *:last-child {
        margin-right: 0;
    }

    .react-datepicker__navigation {
        position: absolute;
        top: 15%;
    }

    .react-datepicker__navigation--previous {
        left: 16px;
    }

    .react-datepicker__navigation--next {
        right: 16px;
    }

    .react-datepicker__aria-live {
        display: none;
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