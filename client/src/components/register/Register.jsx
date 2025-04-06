import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);

    const resgiterHandler = async (formData) => {
        const { username, email, password, rePassword } = Object.fromEntries(formData);

        if (password !== rePassword) {
            console.log('Password mismatch');

            return;
        }

        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate('/');
    }


    return (
        <div className="mail_section">
            <div className="email_text">
                <form id="register" action={resgiterHandler}>

                    <div className="form-group">
                        <input type="text" className="email-bt" placeholder="Name" name="username" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="email-bt" placeholder="Email" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="email-bt" placeholder="Password" name="password" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="email-bt" placeholder="Repeat Password" name="rePassword" />
                    </div>

                    <div className="send_btn">
                        <input type="submit" className="btn" value="REGISTER" />
                    </div>

                    <p>
                        <span>If you already have a profile click <Link to={"/login"}>here</Link></span>
                    </p>
                </form>
            </div>
        </div >
    );
}