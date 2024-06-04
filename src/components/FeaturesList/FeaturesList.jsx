import Icon from "components/Icon/Icon";
import { Features, FeaturesItem } from "./FeaturesList.styled";

const FeaturesList = ({ advert }) => {
    const { adults, transmission, engine, details } = advert;

    return (
        <Features>
            <FeaturesItem>
                <Icon width='20px' height='20px' fill='#101828' name='icon-people' />
                {adults} adults
            </FeaturesItem>
            <FeaturesItem>
                <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-transmission' />
                {transmission}
            </FeaturesItem>
            {details.airConditioner > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-air' />
                    AC
                </FeaturesItem>}
            <FeaturesItem>
                <Icon width='20px' height='20px' fill='#101828' name='icon-petrol' />
                {engine}
            </FeaturesItem>
            {details.kitchen > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-kitchen' />
                    Kitchen
                </FeaturesItem>}
            {details.freezer > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-freezer' />
                    Freezer
                </FeaturesItem>}
            {details.microwave > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-microwave' />
                    Microwave
                </FeaturesItem>}
            {details.toilet > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='#101828' name='icon-toilet-paper' />
                    Toilet
                </FeaturesItem>}
            {details.shower > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-shower' />
                    Shower
                </FeaturesItem>}
            <FeaturesItem>
                <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-air-conditioner' />
                {details.airConditioner}
                air conditioner
            </FeaturesItem>
            {details.CD > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-cd' />
                    CD
                </FeaturesItem>}
            {details.radio > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-radio' />
                    Radio
                </FeaturesItem>}
            {details.TV > 0 &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-tv' />
                    TV
                </FeaturesItem>}
            <FeaturesItem>
                <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-bed' />
                {details.beds} beds
            </FeaturesItem>
            <FeaturesItem>
                <Icon width='20px' height='20px' fill='#101828' name='icon-hob' />
                {details.hob} hob
            </FeaturesItem>
            {details.gas !== "" &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='#101828' name='icon-gas' />
                    Gas
                </FeaturesItem>}
            {details.water !== "" &&
                <FeaturesItem>
                    <Icon width='20px' height='20px' fill='none' stroke='#101828' name='icon-water' />
                    Water
                </FeaturesItem>}
        </Features>
    )
}

export default FeaturesList;