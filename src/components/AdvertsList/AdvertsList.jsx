import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/adverts/adverts-operations";
import { selectAdverts, selectIsLoading, selectError } from "../../redux/adverts/adverts-selectors";
import AdvertsCard from "components/AdvertsCard/AdvertsCard";
import Loader from "components/Loader/Loader";
import { AdvertsWrap, Adverts } from "./AdvertsList.styled";
import { SecondaryBtn } from "components/Button/Button.styled";

const AdvertsList = () => {
    const [page, setPage] = useState(1);

    const adverts = useSelector(selectAdverts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchAdverts(page)) }, [dispatch, page]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    }
    
    const cards = adverts.map((advert) =>
        <AdvertsCard key={`${advert._id}_${advert.name}`} advert={advert} />);

    return (
        <AdvertsWrap>
            {isLoading && <Loader />}
            {error && <p>Oops sorry, an error occured. Please, try again later</p>}
            <Adverts>
                {cards}
            </Adverts>
            <SecondaryBtn type="button" onClick={handleLoadMore}>Load more</SecondaryBtn>
        </AdvertsWrap>
    )
}

export default AdvertsList;