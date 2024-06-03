import { useState, useMemo } from "react";
import FeaturesList from "components/FeaturesList/FeaturesList";
import Modal from "components/Modal/Modal";
import CamperModal from "components/CamperModal/CamperModal";

const AdvertsCard = ({ advert }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { name, price, rating, reviews, location, description, gallery } = advert;

    const memoizedAdvert = useMemo(() => advert, [advert]);

    const handleToggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    }

    return (
        <li>
            <h3>{name}</h3>
            <p>€{price}</p>
            <button type="button">Add to favorites</button>

            <p>{rating}({reviews.length} Reviews)</p>
            <p>{location}</p>

            <p>{description}</p>
            <FeaturesList advert={memoizedAdvert}/>
            <img src={gallery[0]} alt={name} />
            <button type="button" onClick={handleToggleModal}>Show more</button>

            {isModalOpen &&
                <Modal close={handleToggleModal}>
                    <CamperModal advert={memoizedAdvert} />
                </Modal>}
        </li>
        
        
    )
}

export default AdvertsCard;