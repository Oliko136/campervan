import Features from "components/Features/Features";

const AdvertsCard = ({ advert }) => {
    const { name, price, rating, reviews, location, description, gallery } = advert;
    const reviewsCount = reviews.length;

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
            <button type="button">Show more</button>
        </li>
    )
}

export default AdvertsCard;