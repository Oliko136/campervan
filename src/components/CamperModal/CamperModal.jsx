import { useState } from "react";

import Gallery from "components/Gallery/Gallery";
import FeaturesList from "components/FeaturesList/FeaturesList";
import VehicleDetails from "components/VehicleDetails/VehicleDetails";
import Reviews from "components/Reviews/Reviews";

const CamperModal = ({ advert }) => {
    const [shownReviews, setShownReviews] = useState(false);

    const { name, price, rating, reviews, location, description, gallery } = advert;

    console.log('Rendering CamperModal with advert: ', advert);

    return (
        <>
            <h3>{name}</h3>
            <p>€{price}</p>
            <p>{rating}({reviews.length} Reviews)</p>
            <p>{location}</p>
            <p>{description}</p>

            <Gallery gallery={gallery} alt={name} />
            <p>Book your campervan now!</p>

            <ul>
                <li>
                    <button type="button" onClick={() => setShownReviews(false)}>Features</button>
                </li>
                <li>
                    <button type="button" onClick={() => setShownReviews(true)}>Reviews</button>
                </li>
            </ul>
            {shownReviews ?
                <Reviews advert={advert} /> :
                <>
                    <FeaturesList advert={advert} />
                    <VehicleDetails advert={advert}/>
                </>
                
            }
        </>
    )
}

export default CamperModal;