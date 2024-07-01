function Testimonial({rating, image, imageAlt, name, text}) {
    return (
        <article className="testimonial-item">
            <h3>{rating}</h3>
            <div className="person">
                <img src={image} alt={imageAlt}/>
                <p>{name}</p>
            </div>
            <p>{text}</p>
        </article>
    );
}

export default Testimonial;