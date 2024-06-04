import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { Header, NavList, NavListLink } from "./SharedLayout.styled";
import { Container } from "components/Container/Container.styled";

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Container>
                    <nav>
                        <NavList>
                            <li>
                                <NavListLink to="/">Home</NavListLink>
                            </li>
                            <li>
                                <NavListLink to="/catalog">Catalog</NavListLink>
                            </li>
                            <li>
                                <NavListLink to="/favorites">Favorites</NavListLink>
                            </li>
                        </NavList>
                    </nav>
                </Container>
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