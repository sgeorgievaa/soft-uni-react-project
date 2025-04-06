import request from "../utils/request"

const baseUlr = 'http://localhost:3030/users';

export const useLogin = () => {

    const login = async (email, password) => {
        const result = await request.post(`${baseUlr}/login`, {email, password});

        return result;
    }

    return {
        login,
    }
}