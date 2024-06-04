import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { Header, NavList, NavListLink } from "./SharedLayout.styled";
import { Container } from "components/Container/Container.styled";
import { Section } from "components/Section/Section.styled";

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
                <Container>
                    <Section>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </Section>
                </Container>
            </main>
        </>
       
    )
}

export default SharedLayout;