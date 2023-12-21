import { Link } from 'react-router-dom';

import FoodImage from '../../assets/food/food1.png';

const Header = () => {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                        on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={FoodImage} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
        </header>
    );
}

export default Header;