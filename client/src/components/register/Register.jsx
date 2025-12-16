import {  useNavigate } from 'react-router'
import { useRegister } from '../../api/authApi';
import { useUserContext } from '../../contexts/UserContext';

import { toast } from 'react-toastify'

export default function Register() {

    const navigate = useNavigate();
    const { register } = useRegister()
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, username, password, rePassword } = Object.fromEntries(formData);

         if (password !== rePassword){
            
            toast.error('Passwords must match!')
            return;
        }  

        try {
            const authData = await register(email, username, password);
            userLoginHandler(authData);
            navigate('/');
            
        } catch (err) {
            toast.error(err.message)
        }
       


        
    }

    return (

        <section id="register-page">
                <div className="registerSection">
                    <div className="info-register">
                        <h2>"I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed."</h2>
                    </div>
                    <form onSubmit={registerHandler}
                    className="registerForm">
                        <h2>Register</h2>
                        <ul className="noBullet">
                            <li>
                                <label htmlFor="email">Email:</label>
                                <input type="text" className="inputFields" id="email" name="email"/>
                            </li>
                            <li>
                                <label htmlFor="username">Username:</label>
                                <input type="text" minLength={3} className="inputFields" id="username" name="username" />
                            </li>
                            <li>
                                <label htmlFor="password">Password:</label>
                                <input type="password" minLength={6} className="inputFields" id="password" name="password"/>
                            </li>
                            <li>
                                <label htmlFor="repeat-password">Repeat-Password:</label>
                                <input type="password" className="inputFields" id="repeat-password" name="rePassword"/>
                            </li>
                            <li id="center-btn">
                                <button id="join-btn" type="submit">Register</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
    )
}