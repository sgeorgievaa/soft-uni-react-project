import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const [error, setError] = useState('');

    const resgiterHandler = async (formData) => {
        setError('');

        const { username, email, password, rePassword } = Object.fromEntries(formData);

        if (!username || !email || !password || !rePassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== rePassword) {
            setError('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const authData = await register(email, password);
            userLoginHandler(authData);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        }
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