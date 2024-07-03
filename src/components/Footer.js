import logo from "../Logo.svg"
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="compact">
            <img className="footer-logo" src={logo} alt="footer logo"/>
            <div className="footer-column">
                <h3>Doormat Navigation</h3>
                <ul className="nav-list">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/menu">Menu</a>
                    </li>
                    <li>
                        <Link className="nav-link" to="/booking">Reservations</Link>
                    </li>
                    <li>
                        <a className="nav-link" href="/order-online">Order Online</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/login">Login</a>
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