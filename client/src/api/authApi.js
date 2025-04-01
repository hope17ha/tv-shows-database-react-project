import requester from "../utils/requester";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
    const login = async (email, password) =>
        requester.post(
            `${baseUrl}/login`,
            { email, password },
            // { signal: abortRef.current.signal }
        );

    return {
        login,
    }
};
