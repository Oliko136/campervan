import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/adverts/adverts-operations";
import { selectAdverts, selectIsLoading, selectError } from "../../redux/adverts/adverts-selectors";
import AdvertsCard from "components/AdvertsCard/AdvertsCard";
import Loader from "components/Loader/Loader";

const AdvertsList = () => {
    const adverts = useSelector(selectAdverts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchAdverts()) }, [dispatch]);

    const cards = adverts.map(({ _id, name, price, rating, location, description, gallery }) =>
        <AdvertsCard key={_id} name={name} price={price} rating={rating} location={location} description={description} gallery={gallery} />);

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>Oops sorry, an error occured. Please, try again later</p>}
            <ul>
                {cards}
            </ul>
        </>
    )
}

export default AdvertsList;