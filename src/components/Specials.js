import Special from "./Special";
import greekSalad from "../greeksalad.jpg"
import bruchetta from "../bruchetta.svg"
import lemonDessert from "../lemondessert.jpg"

function Specials() {
    return (
        <section className="specials compact">
            <div>
                <div className="top">
                    <h3>This weeks specials!</h3>
                    <button>Online Menu</button>
                </div>
                <div className="items">
                    <Special
                        image={greekSalad}
                        imageAlt="Greek salad"
                        title="Greek salad"
                        price="$12.99"
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Special
                        image={bruchetta}
                        imageAlt="Bruchetta"
                        title="Bruchetta"
                        price="$5.99"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
                    <Special
                        image={lemonDessert}
                        imageAlt="Lemon Dessert"
                        title="Lemon Dessert"
                        price="$5.00"
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                </div>
            </div>
        </section>
    );
}

export default Specials;