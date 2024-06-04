import { useState, useMemo } from "react";
import Icon from "components/Icon/Icon";
import FeaturesList from "components/FeaturesList/FeaturesList";
import Modal from "components/Modal/Modal";
import CamperModal from "components/CamperModal/CamperModal";
import {
    Card, CardImageWrap, CardImage,
    CardDetailsWrap, CardHeader, NamePrice,
    ReviewsLocationWrap, ReviewsWrap, LocationWrap, ReviewsText, LocationText,
    CardDescription
} from "./AdvertsCard.styled";
import { PrimaryButton } from "components/Button/Button.styled";

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
                    <NamePrice>&euro;{price}</NamePrice>
                    <button type="button">Add to favorites</button>
                </CardHeader>

                <ReviewsLocationWrap>
                    <ReviewsWrap>
                        <Icon width='16px' height='16px' name='icon-star-active' />
                        <ReviewsText>{rating}({reviews.length} Reviews)</ReviewsText>
                    </ReviewsWrap>
                    <LocationWrap>
                        <Icon width='16px' height='16px' fill='none' stroke='#101828' name='icon-location'/>
                        <LocationText>{location}</LocationText>
                    </LocationWrap>
                </ReviewsLocationWrap>
    
                <CardDescription>{description}</CardDescription>
                <FeaturesList advert={memoizedAdvert}/>
                
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