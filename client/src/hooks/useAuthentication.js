import {  useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import requester from "../utils/requester";

export default function useAuth() {
    const {accessToken , ...authData} = useContext(UserContext);

    const requestWrapper = (method, url, data, options = {}) => {
        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': accessToken,
                ...options.headers
            }
        };

        return requester.baseRequest(method, url, data, accessToken ? authOptions : options);
    };

    return {
        ...authData,
        accessToken,
        request: {
            get: requestWrapper.bind(null, 'GET'),
            post: requestWrapper.bind(null, 'POST'),
            put: requestWrapper.bind(null, 'PUT'),
            delete: requestWrapper.bind(null, 'DELETE'),
        },
        isAuthenticated: !!accessToken,
        
    }
};
