import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router'

import styles from './EditBook.module.css'
import { useBook, useEditBook } from '../../api/bookApi';
import useAuth from '../../hooks/useAuth';

export default function EditBook() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const { book, isLoading } = useBook(bookId);
    const { edit } = useEditBook();
    const { userId } = useAuth();

    const [values, setValues] = useState({
        title: '',
        author: '',
        genre: '',
        year: '',
        imageUrl: '',
        summary: '',
    });
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        if (book._id) {
            setValues({
                title: book.title ?? '',
                author: book.author ?? '',
                genre: book.genre ?? '',
                year: book.year ?? '',
                imageUrl: book.imageUrl ?? '',
                summary: book.summary ?? '',
            });
        }
    }, [book]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!book._id) {
        return <p>Book not found. <Link to="/catalog">Back to catalog</Link></p>;
    }

    if (userId !== book._ownerId) {
        return <Navigate to={`/catalog/${bookId}/details`} />;
    }

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

        const bookData = {
            ...values,
            title: String(values.title).trim(),
            author: String(values.author).trim(),
            genre: String(values.genre).trim(),
            imageUrl: String(values.imageUrl).trim(),
            summary: String(values.summary).trim(),
        };

        if (!bookData.title || !bookData.author || !bookData.genre || !bookData.year) {
            setError('Please fill in all required fields.');
            return;
        }

        if (Number(bookData.year) < 1800 || Number(bookData.year) > new Date().getFullYear()) {
            setError('Please enter a valid publishing year.');
            return;
        }

        setIsPending(true);

        try {
            await edit(bookId, bookData);
            navigate(`/catalog/${bookId}/details`);
        } catch (err) {
            setError(err.message || 'Something went wrong while saving your changes. Please try again.');
        } finally {
            setIsPending(false);
        }
    };

    return (
        <section id={styles["create-page"]} className="auth">
            <div className={styles["wrapper"]}>

                <form id={styles["create"]} onSubmit={submitHandler}>
                    <div className={styles["container-add"]}>

                        <h1>Edit Book</h1>

                        {error && <p className={styles["error"]}>{error}</p>}

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" value={values.title} onChange={changeHandler} />

                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" value={values.author} onChange={changeHandler} />

                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" value={values.genre} onChange={changeHandler} />

                        <label htmlFor="year">Year of publishing:</label>
                        <input type="number" id="year" name="year" min="1800" value={values.year} onChange={changeHandler} />

                        <label htmlFor="imageUrl">Cover:</label>
                        <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>

                        <div className={styles["buttons"]}>
                            <input className={styles["btn"]} type="submit" value="Edit Book" disabled={isPending} />
                            <Link to={`/catalog/${bookId}/details`} className={styles["btn"]}>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}