import { Container } from "components/Container/Container.styled";
import { Section } from "components/Section/Section.styled";
import { Hero, HeroWrap, HeroTitle, HeroText, HeroLink, } from "./HomePage.styled";

const HomePage = () => {
    return (
        <Hero>
            <Container>
                <Section>
                    <HeroWrap>
                        <HeroTitle>Welcome to Ukraine Camper Van Rentals!</HeroTitle>
                        <HeroText>Discover the freedom of exploring Ukraine at your own pace with our top-quality camper vans. <br/> Whether you're planning a family adventure, a romantic getaway, or a solo expedition, we have the perfect vehicle for your journey. <br/> Enjoy the comfort, convenience, and flexibility of our well-equipped camper vans, and make unforgettable memories on the road. Start your adventure today!</HeroText>
                        <HeroLink to="/catalog">Explore catalog</HeroLink>
                    </HeroWrap> 
                </Section> 
            </Container> 
        </Hero>
    )
}

export default HomePage;