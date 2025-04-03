const baseUrl = 'http://localhost:3030/jsonstore/books';

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const books = Object.values(result);

        return books;
    },

    async create(bookData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });

        const result = await response.json();

        return result;
    }
}