import { Link } from "react-router";

export default function Login() {

    return (

        <section id="login-page">

                <div className="loginSection">
                    <div className="info">
                        <h2>"My mama always said life was like a box of chocolates. You never know what you're gonna get."</h2>
                    </div>
                    <form action="#" method="" className="loginForm">
                        <h2>Login</h2>
                        <ul className="noBullet">
                            <li>
                                <label for="email">Email:</label>
                                <input type="text" className="inputFields" id="email" name="email"/>
                            </li>
                            <li>
                                <label for="password">Password:</label>
                                <input type="password" className="inputFields" id="password" name="password" />
                            </li>

                            <li id="center-btn">
                                <button id="login-btn">Login</button>
                            </li>
                        </ul>
                    </form>
                </div>

            </section>
    )
}