import logo from "../Logo.svg"
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="compact">
            <img className="footer-logo" src={logo} alt="footer logo"/>
            <div className="footer-column">
                <h3>Menu</h3>
                <ul className="nav-list">
                    <li>
                        <Link aria-label="Home" className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <a aria-label="About" className="nav-link" href="/about">About</a>
                    </li>
                    <li>
                        <a aria-label="Menu" className="nav-link" href="/menu">Menu</a>
                    </li>
                    <li>
                        <Link aria-label="Reservations" className="nav-link" to="/booking">Reservations</Link>
                    </li>
                    <li>
                        <a aria-label="Order Online" className="nav-link" href="/order-online">Order Online</a>
                    </li>
                    <li>
                        <a aria-label="Login" className="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact</h3>
                <p>
                    Happiness Avenue 44, Chicago<br/>
                    048444933<br/>
                    contact@little-lemon.com
                </p>
            </div>
            <div className="footer-column">
                <h3>Social Media Links</h3>
                <p>
                    Facebook<br/>
                    Instagram<br/>
                    TikTok
                </p>
            </div>
        </footer>
    );
}

export default Footer;