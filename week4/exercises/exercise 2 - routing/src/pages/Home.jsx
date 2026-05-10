import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <main className="page">
            <h1 className="page__title">Welcome to My Site</h1>
            <p className="page__body">
                This is the home page. Navigate to the other pages using the links in the navbar above.
            </p>
            <div className="home__cards">
                <Link to="/about" className="home__card">
                    <h3>About Us</h3>
                    <p>Learn more about who we are and what we do.</p>
                </Link>
                <Link to="/contact" className="home__card">
                    <h3>Get in Touch</h3>
                    <p>Have a question? Send us a message on the contact page.</p>
                </Link>
                <div className="home__card">
                    <h3>React Router</h3>
                    <p>This app uses React Router to navigate between pages without a full reload.</p>
                </div>
            </div>
        </main>
    );
}
