import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    async getAll(bookId) {
        const comments = await request.get(baseUrl);

        // TODO: filter when migrate to collections

        // Client filetring 
        const bookComments = Object.values(comments).filter(comment => comment.bookId === bookId);

        return bookComments;
    },

    create(email, bookId, name, comment) {
        return request.post(baseUrl, { email, bookId, name, comment });
    }
}