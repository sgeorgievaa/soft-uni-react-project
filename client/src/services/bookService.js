const baseUrl = 'http://localhost:3030/jsonstore/books';

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const books = Object.values(result);

        return books;
    },

    async create(bookData) {
        
    }
}