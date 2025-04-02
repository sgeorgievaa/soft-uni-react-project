export default function Register() {
    return (
        <div className="mail_section">
            <div className="email_text">
                <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Name" name="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Password" name="Password" />
                </div>
                <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Repeat Password" name="RePassword" />
                </div>
                
                <div className="send_btn">
                    <div type="text" className="main_bt"><a href="#">REGISTER</a></div>
                </div>
            </div>
        </div >
    );
}