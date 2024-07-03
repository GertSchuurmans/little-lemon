import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav>
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
        </nav>
    );
}

export default Nav;