import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useLogin();

    const [values, setValues] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

        const email = values.email.trim();

        if (!email || !values.password) {
            setError('Please enter both email and password.');
            return;
        }

        setIsPending(true);

        try {
            await login(email, values.password);
            navigate('/catalog');
        } catch (err) {
            setError(err.message);
            setValues(state => ({ ...state, password: '' }));
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="mail_section">
            <div className="email_text">
                <form id="login" onSubmit={submitHandler}>

                    {error && <p className="form-error">{error}</p>}

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