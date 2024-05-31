const AdvertsCard = ({ name, price, rating, location, description, gallery }) => {
    return (
        <li>
            <h3>{name}</h3>
            <p>€{price}</p>
            <p>{rating}</p>
            <p>{location}</p>
            <p>{description}</p>
            <img src={gallery[0]} alt={name} />
            <button type="button">Show more</button>
        </li>
    )
}

export default AdvertsCard;