import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/adverts/adverts-operations";
import { selectAdverts, selectIsLoading, selectError } from "../../redux/adverts/adverts-selectors";
import AdvertsCard from "components/AdvertsCard/AdvertsCard";
import Loader from "components/Loader/Loader";

const AdvertsList = () => {
    const [page, setPage] = useState(1);

    const adverts = useSelector(selectAdverts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    console.log(page);
    console.log(adverts);

    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchAdverts(page)) }, [dispatch, page]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
        console.log(page);
    }
    
    const cards = adverts.map((advert) =>
        <AdvertsCard key={advert._id} advert={advert} />);

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>Oops sorry, an error occured. Please, try again later</p>}
            <ul>
                {cards}
            </ul>
            <button type="button" onClick={handleLoadMore}>Load more</button>
        </>
    )
}

export default AdvertsList;