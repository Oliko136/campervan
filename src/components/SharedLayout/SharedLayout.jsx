import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { Header, NavList } from "./SharedLayout.styled";
import { Container } from "components/Container/Container.styled";

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Container>
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
                </Container>
            </Header>
            <main>
                <Container>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
        </>
       
    )
}

export default SharedLayout;