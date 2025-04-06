import { useContext, useEffect, useRef } from "react";
import request from "../utils/request"
import { UserContext } from "../contexts/UserContext";

const baseUlr = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = (email, password) => {
        return request.post(`${baseUlr}/login`, { email, password }, { signal: abortRef.current.signal });
    };

    useEffect(() => {
        const abortController = abortRef.current;

        return () => abortController.abort();
    }, []);

    return {
        login,
    }
};

export const useRegister = () => {
    const register = (email, password) => {
        return request.post(`${baseUlr}/register`, { email, password });
    }

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(`${baseUlr}/logout`, null, options)
            .then(userLogoutHandler);
    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    }
};