import Filters from "components/Filters/Filters";
import AdvertsList from "components/AdvertsList/AdvertsList";
import { Container } from "components/Container/Container.styled";
import { Section } from "components/Section/Section.styled";

const CatalogPage = () => {
    return (
        <Container>
            <Section>
                <Filters />
                <AdvertsList />
            </Section>
        </Container>
    )
}

export default CatalogPage;