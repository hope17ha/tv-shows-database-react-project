import { useEffect, useState } from "react";
import requester from "../utils/requester";
import { useUserContext } from "../contexts/UserContext";
import useAuth from "../hooks/useAuth";
import { isValidMail } from "../utils/validators";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {

    const login = (email, password) => {

        if (!isValidMail(email)){
            throw new Error ('Please enter a valid email address!')
        }

        if (!password) {
            throw new Error('Password is required');
        }

        requester.post(
            `${baseUrl}/login`,
            { email, password },
            );
            
        }
    return {
        login,
    }
};

export const useRegister = () => {

    const register = (email, username, password) => {

        if (!isValidMail(email)){
            throw new Error ('Please enter a valid email address!')
        }
        if (username.length < 3) {
            throw new Error("Username must be at least 3 characters");
        }

        if (password.length < 6) {
            throw new Error("Password must be at least 6 characters");
        }

        requester.post(
            `${baseUrl}/register`,
         {email, username, password}
         );
    
        }
    return {
        register,
    }
}

export const useProfileDetails = () => {

    const { request } = useAuth()

    const [profile, setProfile] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/me`)
            .then(setProfile);
    }, [])
    

    

    return {
        profile,
}
}

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useUserContext();

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            },
            
        };

        requester.get(`${baseUrl}/logout`, null, options)
            .finally(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    }

  }

