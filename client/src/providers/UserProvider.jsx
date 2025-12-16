import { UserContext } from "../contexts/UserContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({
    children,
}) {
    const [authData, setAuthData] = usePersistedState('auth', null);
    
    const userLoginHandler = (resultData) => {

        if (!resultData?.accessToken) {
            return;
        }

        setAuthData(resultData);
    };

    const userLogoutHandler = () => {
        setAuthData(null);
    };

    return (
        <UserContext.Provider value={{ ...authData || {},
         userLoginHandler, 
         userLogoutHandler 
         }}>
            {children}
        </UserContext.Provider>
    );
}
