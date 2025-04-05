import { Link } from "react-router";

export default function Login() {
    const loginAction = (formData) => {
        const email = formData.get('email');

        console.log(email);
        
    }

    return (

        <div className="mail_section">
            <div className="email_text">
                <form id="login" action={loginAction}>

                <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="email" />
                </div>
                <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Password" name="password" />
                </div>

                <div className="send_btn">
                    <input type="submit" className="main_bt" value="LOGIN" />
                </div>

                <p>
                    <span>If you don't have a profile click <Link to={"/register"}>here</Link></span>
                </p>
                </form>
            </div>
        </div >
    );
}