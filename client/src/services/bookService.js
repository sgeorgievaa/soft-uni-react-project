import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/books';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const games = Object.values(result);

        return games;
    },

    getOne(gameId) {
        return request.get(`${baseUrl}/${gameId}`);
    },

    create(bookData) {
        return request.post(baseUrl, bookData);
    }
}