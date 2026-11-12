import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function About() {
    const { isAuthenticated } = useAuth();

    return (
        <div className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_taital_main">
                            <div className="about_taital">Our Book Community</div>
                            <p className="about_text">Hi! Here you can read about all of our favorite books and discover YOUR next favorite! </p>
                            <p className="about_text">
                                {isAuthenticated
                                    ? 'Leave a comment or a like on any book, or add a new one to the collection.'
                                    : <><Link to="/login">Log In</Link> to comment and like books, or <Link to="/register">register</Link> if you don't already have an account.</>
                                }
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_img"><img src="/images/about-img.png" alt="Books" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}