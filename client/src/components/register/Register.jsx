import {  useNavigate } from 'react-router'
import { useRegister } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function Register() {

    const navigate = useNavigate();
    const { register } = useRegister()
    const { userLoginHandler } = useContext(UserContext)

    const registerHandler = async (formData) => {
         const { email, password, rePassword } = Object.fromEntries(formData);

        if (password !== rePassword){
            return;
        }   
        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate('/');
        
    }

    return (

        <section id="register-page">
                <div className="registerSection">
                    <div className="info-register">
                        <h2>"I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed."</h2>
                    </div>
                    <form action={registerHandler}
                    className="registerForm">
                        <h2>Register</h2>
                        <ul className="noBullet">
                            <li>
                                <label for="email">Email:</label>
                                <input type="text" className="inputFields" id="email" name="email"/>
                            </li>
                            <li>
                                <label for="password">Username:</label>
                                <input type="password" className="inputFields" id="username" name="username" />
                            </li>
                            <li>
                                <label for="password">Password:</label>
                                <input type="password" className="inputFields" id="password" name="password"/>
                            </li>
                            <li>
                                <label for="repeat-password">Repeat-Password:</label>
                                <input type="password" className="inputFields" id="repeat-password" name="rePassword"/>
                            </li>
                            <li id="center-btn">
                                <button id="join-btn">Register</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
    )
}