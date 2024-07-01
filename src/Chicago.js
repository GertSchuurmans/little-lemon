import restaurantFood from "./restauranfood.jpg"
import mario from "./mario.jpg"

function Chicago() {
    return (
        <section className="chicago">
            <div className="compact">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                </div>
                <img src={restaurantFood} alt="Food being presented"/>
                <img className="second" src={mario} alt="Food being presented"/>
            </div>
        </section>
    );
}

export default Chicago;