import ReviewsItem from "./ReviewsItem";
import { ReviewsList } from "./Reviews.styled";

const Reviews = ({ advert }) => {
    const { reviews } = advert;
    
    const items = reviews.map(review =>
        <ReviewsItem
            key={review.reviewer_name}
            review={review} />
    )
    
    return reviews && (
        <ReviewsList>
            {items}
        </ReviewsList>
    )
}

export default Reviews;