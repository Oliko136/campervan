import { useState, useMemo } from "react";
import Icon from "components/Icon/Icon";
import FeaturesList from "components/FeaturesList/FeaturesList";
import Modal from "components/Modal/Modal";
import CamperModal from "components/CamperModal/CamperModal";
import {
    Card, CardImageWrap, CardImage,
    CardDetailsWrap, CardHeader, NamePrice, PriceFavoriteWrap,
    ReviewsLocationWrap, ReviewsWrap, LocationWrap, ReviewsText, LocationText,
    CardDescription, CardFeaturesWrap
} from "./AdvertsCard.styled";
import { PrimaryButton } from "components/Button/Button.styled";
import formatPrice from "helpers/format-price";
import reverseLocation from "helpers/reverse-location";

const AdvertsCard = ({ advert }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { name, price, rating, reviews, location, description, gallery } = advert;

    const memoizedAdvert = useMemo(() => advert, [advert]);

    const handleToggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    }

    return (
        <Card>
            <CardImageWrap>
                <CardImage src={gallery[0]} alt={name} />
            </CardImageWrap>
    
            <CardDetailsWrap>
                <CardHeader>
                    <NamePrice>{name}</NamePrice>

                    <PriceFavoriteWrap>
                        <NamePrice>&euro;{formatPrice(price)}</NamePrice>
                        <button type="button">
                            <Icon width='24px' height='24px' fill='none' stroke='#101828' name='icon-heart' />
                        </button>
                    </PriceFavoriteWrap>
                </CardHeader>

                <ReviewsLocationWrap>
                    <ReviewsWrap>
                        <Icon width='16px' height='16px' name='icon-star-active' />
                        <ReviewsText>{rating}({reviews.length} Reviews)</ReviewsText>
                    </ReviewsWrap>
                    <LocationWrap>
                        <Icon width='16px' height='16px' fill='none' stroke='#101828' name='icon-location'/>
                        <LocationText>{reverseLocation(location)}</LocationText>
                    </LocationWrap>
                </ReviewsLocationWrap>
    
                <CardDescription>{description}</CardDescription>

                <CardFeaturesWrap>
                    <FeaturesList advert={memoizedAdvert} />
                </CardFeaturesWrap>
        
                <PrimaryButton type="button" onClick={handleToggleModal}>Show more</PrimaryButton>
                    
                {isModalOpen &&
                    <Modal close={handleToggleModal}>
                        <CamperModal advert={memoizedAdvert} />
                    </Modal>}    
            </CardDetailsWrap>
        </Card>
    )
}

export default AdvertsCard;