import { useMemo } from "react";
import { useUserContext } from "../contexts/UserContext";
import requester from "../utils/requester";

export default function useAuth() {
    const { accessToken, ...authData } = useUserContext();

    const requestWrapper = useMemo(() => {
        return (method, url, data, options = {}) => {
            const authOptions = {
                ...options,
                headers: {
                    'X-Authorization': accessToken,
                    ...options.headers,
                },
            };

            return requester.baseRequest(method, url, data, accessToken ? authOptions : options);
        };
    }, [accessToken]);

    const request = useMemo(() => ({
        get: requestWrapper.bind(null, 'GET'),
        post: requestWrapper.bind(null, 'POST'),
        put: requestWrapper.bind(null, 'PUT'),
        delete: requestWrapper.bind(null, 'DELETE'),
    }), [requestWrapper]);

    return {
        ...authData,
        accessToken,
        userId: authData._id,
        request,
        isAuthenticated: !!accessToken,
    };
}
