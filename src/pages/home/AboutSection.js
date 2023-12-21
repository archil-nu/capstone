import { Element } from 'react-scroll';

import MarioAndAdrianFirst from '../../assets/mario-adrian-a.jpg';
import MarioAndAdrianSecond from '../../assets/mario-adrian-b.jpg';

const AboutSection = () => {
    return (
        <Element name="about">
            <article className="about-us" id="about">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                        Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                        and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                        continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                </section>

                <section className="double-image">
                    <img className="about-1" src={MarioAndAdrianFirst} alt="The owners, Mario and Adrian, at Little Lemon"></img>
                    <img className="about-2" src={MarioAndAdrianSecond} alt="The owners, Mario and Adrian, at Little Lemon"></img>
                </section>
            </article>
        </Element>
    );
}

export default AboutSection;