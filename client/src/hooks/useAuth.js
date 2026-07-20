import { useCallback, useContext, useMemo } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";

export default function useAuth() {
    const {accessToken, userLogoutHandler, ...authData} = useContext(UserContext);

    const requestWrapper = useCallback(async (method, url, data, options = {}) => {
        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': accessToken,
                ...options.headers,
            }
        }

        try {
            return await request.baseRequest(method, url, data, accessToken ? authOptions : options);
        } catch (err) {
            if (err.status === 401 || err.status === 403) {
                userLogoutHandler();
                localStorage.removeItem('accessToken');
            }
            throw err;
        }
    }, [accessToken, userLogoutHandler]);

    const requestObject = useMemo(() => ({
        get: requestWrapper.bind(null, 'GET'),
        post: requestWrapper.bind(null, 'POST'),
        put: requestWrapper.bind(null, 'PUT'),
        delete: requestWrapper.bind(null, 'DELETE'),
    }), [requestWrapper]);

    return {
        ...authData,
        userLogoutHandler,
        accessToken,
        userId: authData._id,
        isAuthenticated: !!accessToken,
        request: requestObject,
    }
}