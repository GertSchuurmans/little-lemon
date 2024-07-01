function Special({image, imageAlt, title, price, description}) {
    return (
        <article className="special">
            <img src={image} alt={imageAlt} />
            <div className="title-container">
                <h3>{title}</h3>
                <span className="price">{price}</span>
            </div>
            <p>{description}</p>
            <span className="order-link">Order a delivery</span>
        </article>
    );
}

export default Special;