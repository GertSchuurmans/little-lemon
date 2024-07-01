import logo from "./Logo.svg"
import Nav from "./Nav";

function Header() {

    return (
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <Nav/>
        </header>
    );
}

export default Header;