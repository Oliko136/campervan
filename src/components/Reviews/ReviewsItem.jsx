const ReviewsItem = ({ review }) => {
    const { reviewer_name, reviewer_rating, comment} = review;
    return (
        <li>
            <h4>{reviewer_name}</h4>
            <p>{reviewer_rating}</p>
            <p>{comment}</p>
        </li>
    )
}

export default ReviewsItem;