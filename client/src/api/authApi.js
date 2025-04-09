import { useEffect, useState } from "react";
import requester from "../utils/requester";
import { useUserContext } from "../contexts/UserContext";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {

    const login = (email, password) =>
        requester.post(
            `${baseUrl}/login`,
            { email, password },
        );

    return {
        login,
    }
};

export const useRegister = () => {

    const register = (email, username, password) => 
        requester.post(
            `${baseUrl}/register`,
         {email, username, password}
         );
    

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

export const useEditProfileDetails = () => {
    const { request } = useAuth();

    const edit = async (profileData) =>
        await request.put(`${baseUrl}/me`, { profileData });

    return {
        edit,
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

