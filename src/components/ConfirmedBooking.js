import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function ConfirmedBooking() {
    return (
        <>
            <Header/>
            <Main>
                <section class="compact">
                    <h1>Your booking has been confirmed!</h1>
                    <p>We are happy to welcome you soon!</p>
                </section>
            </Main>
            <Footer/>
        </>
    );
}

export default ConfirmedBooking;