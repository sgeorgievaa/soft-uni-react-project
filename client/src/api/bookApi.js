import { useEffect, useState } from "react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";

const booksRef = collection(db, 'books');

const mapDoc = (snapshot) => ({ _id: snapshot.id, ...snapshot.data() });

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDocs(query(booksRef, orderBy('_createdOn', 'desc')))
            .then(snapshot => setBooks(snapshot.docs.map(mapDoc)))
            .catch(() => setBooks([]))
            .finally(() => setIsLoading(false));
    }, []);

    return { books, isLoading };
};

export const useBook = (bookId) => {
    const [book, setBook] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        getDoc(doc(db, 'books', bookId))
            .then(snapshot => setBook(snapshot.exists() ? mapDoc(snapshot) : {}))
            .catch(() => setBook({}))
            .finally(() => setIsLoading(false));
    }, [bookId]);

    return { book, isLoading };
};

export const useLatestBook = () => {
    const [latestBooks, setLatestBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDocs(query(booksRef, orderBy('_createdOn', 'desc'), limit(3)))
            .then(snapshot => setLatestBooks(snapshot.docs.map(mapDoc)))
            .catch(() => setLatestBooks([]))
            .finally(() => setIsLoading(false));
    }, []);

    return { latestBooks, isLoading };
};

export const useCreateBook = () => {
    const { userId } = useAuth();

    const create = (bookData) => addDoc(booksRef, {
        ...bookData,
        year: Number(bookData.year),
        _ownerId: userId,
        _createdOn: serverTimestamp(),
    });

    return { create };
};

export const useEditBook = () => {
    const edit = (bookId, bookData) => updateDoc(doc(db, 'books', bookId), {
        ...bookData,
        year: Number(bookData.year),
    });

    return { edit };
};

export const useDeleteBook = () => {
    const deleteBook = (bookId) => deleteDoc(doc(db, 'books', bookId));

    return { deleteBook };
};


export const searchBooks = async (field, term) => {
    const snapshot = await getDocs(booksRef);
    const lowered = term.toLowerCase();

    return snapshot.docs
        .map(mapDoc)
        .filter(book => String(book[field] ?? '').toLowerCase().includes(lowered));
};