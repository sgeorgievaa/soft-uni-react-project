import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Footer() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <h3 className="useful_text">About</h3>
                            <p className="footer_text">
                                OurBooks is a community for book lovers. Browse the collection,
                                share your favorite books and discuss them with other readers.
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <h3 className="useful_text">Menu</h3>
                            <div className="footer_menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/catalog">All Books</Link></li>
                                    <li><Link to="/search">Search</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <h3 className="useful_text">Account</h3>
                            <div className="footer_menu">
                                <ul>
                                    {isAuthenticated
                                        ? (
                                            <>
                                                <li><Link to="/add">Add Book</Link></li>
                                                <li><Link to="/logout">Log Out</Link></li>
                                            </>
                                        )
                                        : (
                                            <>
                                                <li><Link to="/login">Log In</Link></li>
                                                <li><Link to="/register">Register</Link></li>
                                            </>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">
                        {new Date().getFullYear()} All Rights Reserved. Design by <a href="https://html.design">Free html Templates</a>
                    </p>
                </div>
            </div>
        </>
    );
}