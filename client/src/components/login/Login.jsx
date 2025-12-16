import { useLogin } from "../../api/authApi";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify'
import { useState } from "react";


export default function Login() {

    const { login } = useLogin();
    const { userLoginHandler } = useUserContext();
    const navigate = useNavigate();

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);

        try {
            const result = await login(email, password);
            userLoginHandler(result);
            toast.success("Login is successful!");
            navigate("/tv-shows");
        } catch (error) {
            toast.error(error.message || "Login failed!");
        } finally {
            setIsPending(false);
        }
    };


    return (

        <section id="login-page">

                <div className="loginSection">
                    <div className="info">
                        <h2>"My mama always said life was like a box of chocolates. You never know what you're gonna get."</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="loginForm">
                        <h2>Login</h2>
                        <ul className="noBullet">
                            <li>
                                <label htmlFor="email">Email:</label>
                                <input type="text" className="inputFields" id="email" name="email"value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                            </li>
                            <li>
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="inputFields" id="password" name="password" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required/>
                            </li>

                            <li id="center-btn">
                                <button id="login-btn" disabled={isPending}>{isPending ? "Logging in..." : "Login"}</button>
                            </li>
                        </ul>
                    </form>
                </div>

            </section>
    )
}