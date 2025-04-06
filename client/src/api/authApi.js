import { useEffect, useRef } from "react";
import request from "../utils/request"

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
}