import { useState } from "react";
import Icon from "components/Icon/Icon";
import Gallery from "components/Gallery/Gallery";
import FeaturesList from "components/FeaturesList/FeaturesList";
import VehicleDetails from "components/VehicleDetails/VehicleDetails";
import Reviews from "components/Reviews/Reviews";
import { NamePrice, ReviewsWrap, ReviewsText, LocationWrap, LocationText } from "components/AdvertsCard/AdvertsCard.styled";
import {
    CamperHeader, CamperReviewsLocationWrap,
    CamperMain, CamperGallery, CamperDescription,
    CamperBottomSection, CamperFeatures
} from "./CamperModal.styled";
import formatPrice from "helpers/format-price";
import reverseLocation from "helpers/reverse-location";

const CamperModal = ({ advert }) => {
    const [shownReviews, setShownReviews] = useState(false);

    const { name, price, rating, reviews, location, description, gallery } = advert;

    return (
        <>
            <CamperHeader>
                <NamePrice>{name}</NamePrice>
            
                <CamperReviewsLocationWrap>
                    <ReviewsWrap>
                        <Icon width='16px' height='16px' name='icon-star-active' />
                        <ReviewsText>{rating}({reviews.length} Reviews)</ReviewsText>
                    </ReviewsWrap>
                    <LocationWrap>
                        <Icon width='16px' height='16px' fill='none' stroke='#101828' name='icon-location'/>
                        <LocationText>{reverseLocation(location)}</LocationText>
                    </LocationWrap>
                </CamperReviewsLocationWrap>
                <NamePrice>&euro;{formatPrice(price)}</NamePrice>
            </CamperHeader>

            <CamperMain>
                <CamperGallery>
                    <Gallery gallery={gallery} alt={name} />
                </CamperGallery>
                <CamperDescription>{description}</CamperDescription>
                
                <ul>
                    <li>
                        <button type="button" onClick={() => setShownReviews(false)}>Features</button>
                    </li>
                    <li>
                        <button type="button" onClick={() => setShownReviews(true)}>Reviews</button>
                    </li>
                </ul>
                <CamperBottomSection>
                    {shownReviews ?
                        <Reviews advert={advert} /> :
                        <CamperFeatures>
                            <FeaturesList advert={advert} />
                            <VehicleDetails advert={advert} />
                        </CamperFeatures>
                    }
                    <p>Book your campervan now!</p>
                </CamperBottomSection>
                
            </CamperMain>
        </>
    )
}

export default CamperModal;