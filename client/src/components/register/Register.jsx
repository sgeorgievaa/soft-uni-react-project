import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: '',
    });
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

        const username = values.username.trim();
        const email = values.email.trim();
        const { password, rePassword } = values;

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

        setIsPending(true);

        try {
            await register(email, password, username);
            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="mail_section">
            <div className="email_text">
                <form id="register" onSubmit={submitHandler}>

                    {error && <p className="form-error">{error}</p>}

                    <div className="form-group">
                        <input
                            type="text"
                            className="email-bt"
                            placeholder="Name"
                            name="username"
                            value={values.username}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="email-bt"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="email-bt"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </div>
                    <p className="form-hint">Password must be at least 6 characters long.</p>
                    <div className="form-group">
                        <input
                            type="password"
                            className="email-bt"
                            placeholder="Repeat Password"
                            name="rePassword"
                            value={values.rePassword}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="send_btn">
                        <input type="submit" className="btn" value="REGISTER" disabled={isPending} />
                    </div>

                    <p>
                        <span>If you already have a profile click <Link to={"/login"}>here</Link></span>
                    </p>
                </form>
            </div>
        </div >
    );
}