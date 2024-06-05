import Favorites from "components/Favorites/Favorites";
import { Container } from "components/Container/Container.styled";
import { Section } from "components/Section/Section.styled";

const FavoritesPage = () => {
    return (
        <Container>
            <Section>
                <Favorites />
            </Section>
        </Container>
    )
}

export default FavoritesPage;