import { useActionState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();

    const loginHandler = (previousState, formData) => {
        const values = Object.fromEntries(formData);

        onLogin(values.email);
        
        navigate('/catalog');
        
        return values;
    }

    const [values, loginAction, isPending] = useActionState(loginHandler, {email: '', password: ''});

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
                    <input type="submit" className="btn" value="LOGIN" disabled={isPending} />
                </div>

                <p>
                    <span>If you don't have a profile click <Link to={"/register"}>here</Link></span>
                </p>
                </form>
            </div>
        </div >
    );
}