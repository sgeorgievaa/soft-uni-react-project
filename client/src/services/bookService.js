import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/books';

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

    delete(bookId) {
        return request.delete(`${baseUrl}/${bookId}`);
        
    }
}