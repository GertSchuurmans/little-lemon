import logo from "./Logo.svg"

function Footer() {

    return (
        <footer>
            <img src={logo} alt="footer logo"/>
            <div className="footer-column">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/order-online">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact</h3>
                <p>
                    Address<br/>
                    Phone number<br/>
                    Email
                </p>
            </div>
            <div className="footer-column">
                <h3>Social Media Links</h3>
                <p>
                    Address<br/>
                    Phone number<br/>
                    Email
                </p>
            </div>
        </footer>
    );
}

export default Footer;