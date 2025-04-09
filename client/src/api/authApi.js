import { useEffect } from "react";
import requester from "../utils/requester";
import { useUserContext } from "../contexts/UserContext";

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

    const register = (email, password) => 
        requester.post(
            `${baseUrl}/register`,
         {email, password}
         );
    

    return {
        register,
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

