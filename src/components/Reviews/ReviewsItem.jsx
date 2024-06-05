import Icon from "components/Icon/Icon";
import {
    ReviewsCard, ReviewsHeader, ReviewsAvatar,
    ReviewsNameRatingWrap, ReviewsRatingWrap, ReviewsName, ReviewsComment
} from "./ReviewsItem.styled";

const ReviewsItem = ({ review }) => {
    const { reviewer_name, reviewer_rating, comment } = review;

    const fistLetter = review.reviewer_name.charAt(0);

    const stars = Array(5).fill(0);
    
    
    return (
        <ReviewsCard>
            <ReviewsHeader>
                <ReviewsAvatar>{fistLetter}</ReviewsAvatar>
                <ReviewsNameRatingWrap>
                    <ReviewsName>{reviewer_name}</ReviewsName>
                    <ReviewsRatingWrap>
                        {stars.map((_, index) => {
                            return (
                                <Icon
                                    key={index}
                                    width="16px"
                                    height="16px"
                                    name={(reviewer_rating) > index ? "icon-star-active" : "icon-star"} />
                            )
                        })}
                    </ReviewsRatingWrap> 
                </ReviewsNameRatingWrap>
            </ReviewsHeader>
            <ReviewsComment>{comment}</ReviewsComment>
        </ReviewsCard>
    )
}

export default ReviewsItem;