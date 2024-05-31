import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/adverts/adverts-operations";
import { selectAdverts, selectIsLoading, selectError } from "../../redux/adverts/adverts-selectors";
import Loader from "components/Loader/Loader";

const AdvertsList = () => {
    const adverts = useSelector(selectAdverts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchAdverts()) }, [dispatch]);

    const elements = adverts.map(({ _id, name }) =>
        <li key={_id}>{name}</li>);

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>Oops sorry, an error occured. Please, try again later</p>}
            <ul>
                {elements}
            </ul>
        </>
    )
}

export default AdvertsList;