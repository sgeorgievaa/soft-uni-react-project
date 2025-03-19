export default function Catalog() {
    return (
        <div className="gallery_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="gallery_taital">All Books</h1>
                    </div>
                </div>
                <div className="">
                    <div className="gallery_section_2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src={"../public/images/harry-potter.jpg"} alt="Avatar" className="image" />
                                    <div>
                                        <h3>Harry Potter</h3>
                                        {/* <img src={"../public/images/harry-potter.jpg"} alt="" /> */}
                                    </div>
                                    <div className="overlay">
                                        <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src="../public/images/img-2.png" alt="Avatar" className="image" />
                                    <div className="overlay">
                                        <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src={"../public/images/img-3.png"} alt="Avatar" className="image" />
                                    <div className="overlay">
                                        <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_section_2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src="../public/images/img-4.png" alt="Avatar" className="image" />
                                    <div className="overlay">
                                        <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src="../public/images/img-5.png" alt="Avatar" className="image" />
                                    <div className="overlay">
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src="../public/images/img-6.png" alt="Avatar" className="image" />
                                    <div className="overlay">
                                        <div className="overlay">
                                            <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_section_2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src="../public/images/img-7.png" alt="Avatar" className="image" />
                                    <div className="overlay">
                                        <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src="../public/images/img-8.png" alt="Avatar" className="image" />
                                    <div className="overlay">
                                        <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="container_main">
                                    <img src="../public/images/img-9.png" alt="Avatar" className="image" />
                                    <div className="overlay">
                                        <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}