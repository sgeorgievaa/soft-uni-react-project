import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    create(email, bookId, comment) {
        return request.post(baseUrl, { email, bookId, comment });
    }
}