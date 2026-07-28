import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/books';

export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setBooks)
            .catch(() => setBooks([]));
    }, []);

    return {
        books,
    }
}

export const useBook = (bookId) => {
    const [book, setBook] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        request.get(`${baseUrl}/${bookId}`)
            .then(setBook)
            .catch(() => setBook({}))
            .finally(() => setIsLoading(false));
    }, [bookId]);

    return {
        book,
        isLoading,
    }
}

export const useLatestBook = () => {
    const [latestBooks, setLatestBooks] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLatestBooks)
            .catch(() => setLatestBooks([]));
    }, []);

    return {
        latestBooks,
    }
}

export const useCreateBook = () => {
    const {request} = useAuth();

    const create = (bookData) => {
        return request.post(baseUrl, bookData);
    }

    return {
        create,
    }
};

export const useEditBook = () => {
    const {request} = useAuth();

    const edit = (bookId, bookData) => {
        return request.put(`${baseUrl}/${bookId}`, {...bookData, _id: bookId});
    }

    return {
        edit,
    }
};

export const useDeleteBook = () => {
    const {request} = useAuth();

    const deleteBook = (bookId) => 
        request.delete(`${baseUrl}/${bookId}`);
    

    return  {
        deleteBook,
    }
}