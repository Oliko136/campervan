import { NavLink } from "react-router-dom";
const HomePage = () => {
    return (
        <>
            <h1>Welcome to Ukraine Camper Van Rentals!</h1>
            <p>Discover the freedom of exploring Ukraine at your own pace with our top-quality camper vans. Whether you're planning a family adventure, a romantic getaway, or a solo expedition, we have the perfect vehicle for your journey. Enjoy the comfort, convenience, and flexibility of our well-equipped camper vans, and make unforgettable memories on the road. Start your adventure today!</p>
            <NavLink to="/catalog">Explore catalog</NavLink>
        </>
        
    )
}

export default HomePage;