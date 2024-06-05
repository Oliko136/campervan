import { useState } from "react";
import DatePicker from "react-datepicker";
import Icon from "components/Icon/Icon";
import {
    Form, FormTitleWrap,
    FormTitle, FormSubtitle,
    FormInput, FormTextarea,
    FormInputWrap, FormCalendarWrap
} from "./BookingForm.styled";
import { PrimaryButton } from "components/Button/Button.styled";

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    return (
        <Form>
            <FormTitleWrap>
                <FormTitle>Book your campervan now</FormTitle>
                <FormSubtitle>Stay connected! We are always ready to help you.</FormSubtitle>
            </FormTitleWrap>
            
            <FormInputWrap>
                <FormInput name="name" placeholder="Name" type="text" required />
                <FormInput name="email" placeholder="Email" type="email" required />
                
                <FormCalendarWrap>
                    <DatePicker
                        showIcon
                        toggleCalendarOnIconClick
                        selectsRange
                        selected={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={onChange}
                        placeholderText="Booking date"
                        dateFormat="dd/MM/yyyy"
                        icon={<Icon width="20px" height="20px" fill="none" stroke="#101828" name="icon-calendar" />}
                        customInput={<FormInput name="date"  type="text" required />}
                    />
                </FormCalendarWrap>
                
                <FormTextarea name="comment" placeholder="Comment" type="text" />
            </FormInputWrap>

            <PrimaryButton type="submit">Send</PrimaryButton>
        </Form>
    )
}

export default BookingForm;