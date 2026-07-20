import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        userLoginHandler(authData);

        navigate('/catalog');

      
        
    }

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    return (

        <div className="mail_section">
            <div className="email_text">
                <form id="login" action={loginAction}>

                    <div className="form-group">
                        <input type="text" className="email-bt" placeholder="Email" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="email-bt" placeholder="Password" name="password" />
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