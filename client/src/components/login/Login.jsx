import { useActionState, useContext } from "react";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";

export default function Login() {

    const { login } = useLogin();
    const { userLoginHandler } = useContext(UserContext)

    const loginFormHandler = async (prevState, formData) => {
        const entries = Object.fromEntries(formData);

        const result = await login(entries.email, entries.password);

        userLoginHandler(result);

        

    }

    const [values, loginAction, isPending] = useActionState( loginFormHandler , { email: '', password: ''});


    return (

        <section id="login-page">

                <div className="loginSection">
                    <div className="info">
                        <h2>"My mama always said life was like a box of chocolates. You never know what you're gonna get."</h2>
                    </div>
                    <form action={loginAction} className="loginForm">
                        <h2>Login</h2>
                        <ul className="noBullet">
                            <li>
                                <label htmlFor="email">Email:</label>
                                <input type="text" className="inputFields" id="email" name="email"/>
                            </li>
                            <li>
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="inputFields" id="password" name="password" />
                            </li>

                            <li id="center-btn">
                                <button id="login-btn" disabled={isPending}>Login</button>
                            </li>
                        </ul>
                    </form>
                </div>

            </section>
    )
}