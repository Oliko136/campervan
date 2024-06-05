import { useState } from "react";
import Icon from "components/Icon/Icon";
import Gallery from "components/Gallery/Gallery";
import FeaturesList from "components/FeaturesList/FeaturesList";
import VehicleDetails from "components/VehicleDetails/VehicleDetails";
import Reviews from "components/Reviews/Reviews";
import BookingForm from "components/BookingForm/BookingForm";
import { NamePrice, ReviewsWrap, ReviewsText, LocationWrap, LocationText } from "components/AdvertsCard/AdvertsCard.styled";
import {
    CamperHeader, CamperReviewsLocationWrap,
    CamperMain, CamperGallery, CamperDescription,
    CamperTabList, CamperTabButton,
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
                
                <CamperTabList>
                    <li>
                        <CamperTabButton type="button" onClick={() => setShownReviews(false)}>Features</CamperTabButton>
                    </li>
                    <li>
                        <CamperTabButton type="button" onClick={() => setShownReviews(true)}>Reviews</CamperTabButton>
                    </li>
                </CamperTabList>

                <CamperBottomSection>
                    {shownReviews ?
                        <Reviews advert={advert} /> :
                        <CamperFeatures>
                            <FeaturesList advert={advert} />
                            <VehicleDetails advert={advert} />
                        </CamperFeatures>
                    }
                    <BookingForm />
                </CamperBottomSection>
                
            </CamperMain>
        </>
    )
}

export default CamperModal;