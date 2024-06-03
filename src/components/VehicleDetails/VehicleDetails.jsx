const VehicleDetails = ({ advert }) => {
    try {
        const { form, length, width, height, tank, consumption } = advert;
        console.log('Rendering VehicleDetails with advert: ', advert);
        return (
            <>
                <h4>Vehicle Details</h4>
                <ul>
                    <li>Form {form}</li>
                    <li>Length {length}</li>
                    <li>Width {width}</li>
                    <li>Heigth {height}</li>
                    <li>Tank {tank}</li>
                    <li>Consumption {consumption}</li>
                </ul>
            </>
        )
    } catch (error) {
        console.error("Error in VehicleDetails component: ", error);
    }
    
}

export default VehicleDetails;