export default function Login() {
    return (
        <div className="mail_section">
            <div className="email_text">
                <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Password" name="Password" />
                </div>

                <div className="send_btn">
                    <div type="text" className="main_bt"><a href="#">LOGIN</a></div>
                </div>
            </div>
        </div >
    );
}