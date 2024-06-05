import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/adverts/adverts-selectors";
import AdvertsList from "components/AdvertsList/AdvertsList";
import AdvertsCard from "components/AdvertsCard/AdvertsCard";

const Favorites = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <>
            {favorites.length > 0 ?
                <AdvertsList>
                    {favorites.map(favorite => {
                        return (
                            <AdvertsCard key={favorite._id} advert={favorite}/>
                        )
                    })}
                </AdvertsList> :
                "You have not selected any favorites yet"
            }
        </>
    )

}
export default Favorites;