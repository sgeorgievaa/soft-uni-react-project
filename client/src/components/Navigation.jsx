export default function Navigation() {
    return (
        <div className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="header-logo-my-class"><a href="index.html">OurBooks</a></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="add.html">Add Book</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="gallery.html">All Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services.html">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}