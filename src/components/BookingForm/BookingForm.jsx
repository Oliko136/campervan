import { Form, FormTitleWrap, FormTitle, FormSubtitle, FormInput, FormTextarea, FormInputWrap } from "./BookingForm.styled";
import { PrimaryButton } from "components/Button/Button.styled";

const BookingForm = () => {
    return (
        <Form>
            <FormTitleWrap>
                <FormTitle>Book your campervan now</FormTitle>
                <FormSubtitle>Stay connected! We are always ready to help you.</FormSubtitle>
            </FormTitleWrap>
            
            <FormInputWrap>
                <FormInput name="name" placeholder="Name" type="text" required />
                <FormInput name="email" placeholder="Email" type="email" required />
                <FormInput name="date" placeholder="Booking date" type="date" required />
                <FormTextarea name="comment" placeholder="Comment" type="text" />
            </FormInputWrap>
            
            <PrimaryButton type="submit">Send</PrimaryButton>
        </Form>
    )
}

export default BookingForm;