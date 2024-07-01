import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function HomePage () {
    return (
        <>
            <Header/>
            <Main>
                <CallToAction/>
                <Specials/>
                <CustomersSay/>
                <Chicago/>
            </Main>
            <Footer/>
        </>
    );
}

export default HomePage;