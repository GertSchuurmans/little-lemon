import restaurantFood from "../restauranfood.jpg"
import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <section className="call-to-action primary-background">
            <div className="compact">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking"><button>Reserve a table</button></Link>
                </div>
                <img src={restaurantFood} alt="Food being presented"/>
            </div>
        </section>
    );
}

export default CallToAction;