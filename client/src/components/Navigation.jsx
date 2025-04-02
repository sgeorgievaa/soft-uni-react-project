import { Link } from "react-router";

export default function Navigation() {
    return (
        <div className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="header-logo-my-class">
                        <Link to="/">Our Books</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Add Book</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">All Book</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Log In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}