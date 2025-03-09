import './App.css'

function App() {

  return (
    <>
      {/* <!--header section start --> */}
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo"><a href="index.html"><img src="./images/logo.png" /></a></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="gallery.html">Gallery</a>
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
      {/* <!--header secti /on end --> */}
      {/* <!-- banner section start --> */}
      <div className="banner_section layout_padding">
        <div className="container">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Outstanding</h1>
                      <h1 className="coffee_text">Coffee Shop</h1>
                      <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                      <div className="learnmore_bt"><a href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Outstanding </h1>
                      <h1 className="coffee_text">Coffee Shop</h1>
                      <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                      <div className="learnmore_bt"><a href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="banner_taital">
                      <h1 className="outstanding_text">Outstanding </h1>
                      <h1 className="coffee_text">Coffee Shop</h1>
                      <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                      <div className="learnmore_bt"><a href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- banner section end --> */}
      {/* <!-- about section start --> */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <div className="about_taital">About Us</div>
                <p className="about_text">Full cleaning and housekeeping services for companies and households.</p>
                <p className="about_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
                <div className="read_bt"><a href="#">Read More</a></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img"><img src={"./images/about-img.png"} /></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about section end --> */}
      {/* <!-- gallery section start --> */}
      <div className="gallery_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="gallery_taital">Our Gallery</h1>
              <p className="gallery_text">Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
            </div>
          </div>
          <div className="">
            <div className="gallery_section_2">
              <div className="row">
                <div className="col-md-4">
                  <div className="container_main">
                    <img src={"./images/img-1.png"} alt="Avatar" className="image" />
                    <div className="overlay">
                      <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="images/img-2.png" alt="Avatar" className="image" />
                    <div className="overlay">
                      <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src={"./images/img-3.png"} alt="Avatar" className="image" />
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
                    <img src="images/img-4.png" alt="Avatar" className="image" />
                    <div className="overlay">
                      <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="images/img-5.png" alt="Avatar" className="image" />
                    <div className="overlay">
                      <div className="overlay">
                        <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="images/img-6.png" alt="Avatar" className="image" />
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
                    <img src="images/img-7.png" alt="Avatar" className="image" />
                    <div className="overlay">
                      <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="images/img-8.png" alt="Avatar" className="image" />
                    <div className="overlay">
                      <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container_main">
                    <img src="images/img-9.png" alt="Avatar" className="image" />
                    <div className="overlay">
                      <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="seemore_bt"><a href="#">See More</a></div>
        </div>
      </div>
      {/* <!-- gallery section end --> */}
      {/* <!-- services section start --> */}
      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="services_taital">Services</h1>
              <p className="services_text">Typesetting industry lorem Ipsum is simply dummy text of the </p>
            </div>
          </div>
          <div className="services_section_2">
            <div className="row">
              <div className="col-lg-4 col-sm-12 col-md-4">
                <div className="box_main active">
                  <div className="house_icon">
                    <img src="images/icon1.png" className="image_1" />
                    <img src="images/icon1.png" className="image_2" />
                  </div>
                  <h3 className="decorate_text">Original Coffee</h3>
                  <p className="tation_text">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  <div className="readmore_bt"><a href="#">Read More</a></div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-4">
                <div className="box_main">
                  <div className="house_icon">
                    <img src="images/icon2.png" className="image_1" />
                    <img src="images/icon2.png" className="image_2" />
                  </div>
                  <h3 className="decorate_text">20 Coffee Flavors</h3>
                  <p className="tation_text">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  <div className="readmore_bt"><a href="#">Read More</a></div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-4">
                <div className="box_main">
                  <div className="house_icon">
                    <img src="images/icon3.png" className="image_1" />
                    <img src="images/icon3.png" className="image_2" />
                  </div>
                  <h3 className="decorate_text">Pleasant Abient</h3>
                  <p className="tation_text">Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  <div className="readmore_bt"><a href="#">Read More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- services section end --> */}
      {/* <!-- testimonial section start --> */}
      <div className="client_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="client_taital">Testimonial</h1>
              <p className="client_text">Eeven slightly believable. If you are going to use a passage of Lorem Ipsum, you need to</p>
            </div>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client_section_2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="testimonial_section_2">
                        <h4 className="client_name_text">Monila <span className="quick_icon"><img src="images/quick-icon.png" /></span></h4>
                        <p className="customer_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_section_2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="testimonial_section_2">
                        <h4 className="client_name_text">Monila <span className="quick_icon"><img src="images/quick-icon.png" /></span></h4>
                        <p className="customer_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_section_2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="testimonial_section_2">
                        <h4 className="client_name_text">Monila <span className="quick_icon"><img src="images/quick-icon.png" /></span></h4>
                        <p className="customer_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- testimonial section end --> */}
      {/* <!-- contact section start --> */}
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="contact_text">Contact Us</h1>
        </div>
      </div>
      <div className="contact_section_2 layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 padding_0">
              <div className="mail_section">
                <div className="email_text">
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Name" name="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Phone Numbar" name="Email" />
                  </div>
                  <div className="form-group">
                    <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                  </div>
                  <div className="send_btn">
                    <div type="text" className="main_bt"><a href="#">SEND</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 padding_0">
              {/* <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="508" frameBorder="0" allowFullScreen></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact section end --> */}
      {/* <!-- footer section start --> */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <h3 className="useful_text">About</h3>
              <p className="footer_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h3 className="useful_text">Menu</h3>
              <div className="footer_menu">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="useful_text">Useful Link</h1>
              <p className="dummy_text">Adipiscing Elit, sed do Eiusmod Tempor incididunt </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="useful_text">Contact Us</h1>
              <div className="location_text">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left_10">Address : Loram Ipusm</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">Call : +01 1234567890</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left_10">Email : demo@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer section end --> */}
      {/* <!-- copyright section start --> */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
        </div>
      </div>
      {/* <!-- copyright section end --> */}
      {/* <!-- Javascript files--> */}
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/plugin.js"></script>
      {/* <!-- sidebar --> */}
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>

    </>
  )
}

export default App
