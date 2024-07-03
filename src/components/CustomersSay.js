import Testimonial from "../Testimonial";
import person1 from "../Benjamin.jpg"
import person2 from "../happyman.jpg"
import person3 from "../woman.jpg"
import person4 from "../person.jpg"

function CustomersSay() {
    return (
        <section className="testimonial primary-background">
            <div className="compact">
                <h2 className="centered">Testimonials</h2>
                <div className="testimonials">
                    <Testimonial rating="Great" image={person1} name="Benjamin" text="Best restaurant in town"/>
                    <Testimonial rating="Perfect" image={person2} name="John" text="Love to eat here"/>
                    <Testimonial rating="Awesome" image={person3} name="Sarah" text="Surprised of the variaty of the menu"/>
                    <Testimonial rating="Very good" image={person4} name="Igmar" text="Very nice servers"/>
                </div>
            </div>
        </section>
    );
}

export default CustomersSay;