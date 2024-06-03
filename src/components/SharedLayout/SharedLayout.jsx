import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { Header, NavList } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
        <>
            <Header>
                <nav>
                    <NavList>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog">Catalog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites">Favorites</NavLink>
                        </li>
                    </NavList>
                </nav>
            </Header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
       
    )
}

export default SharedLayout;