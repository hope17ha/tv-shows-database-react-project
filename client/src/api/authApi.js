import { useEffect, useRef } from "react";
import requester from "../utils/requester";

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

    const register = (email, password) => {
        requester.post(`${baseUrl}/register`, {email, password})
    }

    return {
        register,
    }
}
