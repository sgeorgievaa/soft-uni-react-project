export default function About() {
    return (
        <div className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_taital_main">
                            <div className="about_taital">Our Book Community</div>
                            <p className="about_text">Hi! Here you can read about all of our favorite books and discover YOUR next favorite! </p>
                            <p className="about_text"><a href="#">Log In</a> to comment or <a href="#">register</a> if you don't already have an account.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_img"><img src={"../public/images/about-img.png"} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}