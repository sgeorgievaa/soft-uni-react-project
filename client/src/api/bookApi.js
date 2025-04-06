import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/books';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const games = Object.values(result);

        return games;
    },

    getOne(bookId) {
        return request.get(`${baseUrl}/${bookId}`);
    },

    create(bookData) {
        return request.post(baseUrl, bookData);
    },

    edit(bookId, bookData) {
        return request.put(`${baseUrl}/${bookId}`, {...bookData, _id: bookId});
    },

    delete(bookId) {
        return request.delete(`${baseUrl}/${bookId}`);
        
    },
}

export const useCreateBook = () => {
    const {accessToken} = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }

    const create = (bookData) => {
        return request.post(baseUrl, bookData, options);
    }

    return {
        create,
    }
}