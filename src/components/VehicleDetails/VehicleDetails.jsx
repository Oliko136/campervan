import {
    VehicleDetailsWrap, VehicleDetailsTitle,
    VehicleDetailsList, VehicleDetailsItem, VehicleDetailsKey, VehicleDetailsValue
} from "./VehicleDetails.styled";

const VehicleDetails = ({ advert }) => {
    const { form, length, width, height, tank, consumption } = advert;

    return (
        <VehicleDetailsWrap>
            <VehicleDetailsTitle>Vehicle Details</VehicleDetailsTitle>
            <VehicleDetailsList>
                <VehicleDetailsItem>
                    <VehicleDetailsKey>Form</VehicleDetailsKey>
                    <VehicleDetailsValue>{form}</VehicleDetailsValue>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <VehicleDetailsKey>Length</VehicleDetailsKey>
                    <VehicleDetailsValue>{length}</VehicleDetailsValue>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <VehicleDetailsKey>Width</VehicleDetailsKey>
                    <VehicleDetailsValue>{width}</VehicleDetailsValue>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <VehicleDetailsKey>Height</VehicleDetailsKey>
                    <VehicleDetailsValue>{height}</VehicleDetailsValue>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <VehicleDetailsKey>Tank</VehicleDetailsKey>
                    <VehicleDetailsValue>{tank}</VehicleDetailsValue>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <VehicleDetailsKey>Consumption</VehicleDetailsKey>
                    <VehicleDetailsValue>{consumption}</VehicleDetailsValue>
                </VehicleDetailsItem>
            </VehicleDetailsList>
        </VehicleDetailsWrap>
    )
}

export default VehicleDetails;