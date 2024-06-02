import { useState } from "react";
import Features from "components/Features/Features";
import Modal from "components/Modal/Modal";

const AdvertsCard = ({ advert }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { name, price, rating, reviews, location, description, gallery } = advert;
    const reviewsCount = reviews.length;

    const handleToggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    }

    return (
        <li>
            <h3>{name}</h3>
            <p>€{price}</p>
            <button type="button">Add to favorites</button>

            <p>{rating}({reviewsCount} Reviews)</p>
            <p>{location}</p>

            <p>{description}</p>
            <Features advert={advert}/>
            <img src={gallery[0]} alt={name} />
            <button type="button" onClick={handleToggleModal}>Show more</button>

            {isModalOpen && <Modal close={handleToggleModal} />}
        </li>
    )
}

export default AdvertsCard;