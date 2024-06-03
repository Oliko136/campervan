import ReviewsItem from "./ReviewsItem";

const Reviews = ({ advert }) => {
    try {
        console.log('Rendering Reviews with advert: ', advert);
        const { reviews } = advert;

        const items = reviews.map(review => <ReviewsItem review={review} />)
        return reviews && (
            <ul>
                {items}
            </ul>
        )
    } catch (error) {
        console.error("Error in Reviews component: ", error);
        return <div>Failed to load reviews</div>;
    }
}

export default Reviews;