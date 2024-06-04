import { ReviewsCard, ReviewsHeader, ReviewsAvatar, ReviewsNameRatingWrap, ReviewsName, ReviewsComment } from "./ReviewsItem.styled";

const ReviewsItem = ({ review }) => {
    const { reviewer_name, reviewer_rating, comment } = review;

    const fistLetter = review.reviewer_name.charAt(0);
    
    return (
        <ReviewsCard>
            <ReviewsHeader>
                <ReviewsAvatar>{fistLetter}</ReviewsAvatar>
                <ReviewsNameRatingWrap>
                    <ReviewsName>{reviewer_name}</ReviewsName>
                    <p>{reviewer_rating}</p>
                </ReviewsNameRatingWrap>
            </ReviewsHeader>
            <ReviewsComment>{comment}</ReviewsComment>
        </ReviewsCard>
    )
}

export default ReviewsItem;