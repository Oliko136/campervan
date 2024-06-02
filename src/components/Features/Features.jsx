const Features = ({ advert }) => {
    const { adults, transmission, engine, details } = advert;

    return (
        <ul>
            <li>{adults} adults</li>
            <li>{transmission}</li>
            {details.airConditioner > 0 && <li>AC</li>}
            <li>{engine}</li>
            {details.kitchen > 0 && <li>Kitchen</li>}
            {details.freezer > 0 && <li>Freezer</li>}
            {details.microwave > 0 && <li>Microwave</li>}
            {details.bathroom > 0 && <li>Bathroom</li>}
            {details.toilet > 0 && <li>Toilet</li>}
            {details.shower > 0 && <li>Shower</li>}
            <li>{details.airConditioner} air conditioner</li>
            {details.CD > 0 && <li>CD</li>}
            {details.radio > 0 && <li>Radio</li>}
            {details.TV > 0 && <li>TV</li>}
            <li>{details.beds} beds</li>
            <li>{details.hob} hob</li>
            {details.gas !== "" && <li>Gas</li>}
            {details.water !== "" && <li>Water</li>}
        </ul>
    )
}

export default Features;