import { useState } from 'react'
import { useNavigate, Link } from 'react-router'

import styles from './AddBook.module.css'
import { useCreateBook } from '../../api/bookApi';

const initialValues = {
    title: '',
    author: '',
    genre: '',
    year: '',
    imageUrl: '',
    summary: '',
};

export default function AddBook() {
    const navigate = useNavigate();
    const { create } = useCreateBook();

    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

        const bookData = {
            ...values,
            title: values.title.trim(),
            author: values.author.trim(),
            genre: values.genre.trim(),
            imageUrl: values.imageUrl.trim(),
            summary: values.summary.trim(),
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
            await create(bookData);
            navigate('/catalog');
        } catch (err) {
            setError(err.message || 'Something went wrong while adding the book. Please try again.');
        } finally {
            setIsPending(false);
        }
    };

    return (
        <section id={styles["create-page"]} className="auth">
            <div className={styles["wrapper"]}>

                <figure>
                    <img src="/images/about-img.png" alt="" />
                </figure>

                <form id={styles["create"]} onSubmit={submitHandler}>
                    <div className={styles["container-add"]}>

                        <h1>Add Book</h1>

                        {error && <p className={styles["error"]}>{error}</p>}

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter book title..." value={values.title} onChange={changeHandler} />

                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" placeholder="Enter book author name..." value={values.author} onChange={changeHandler} />

                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter book genre..." value={values.genre} onChange={changeHandler} />

                        <label htmlFor="year">Year of publishing:</label>
                        <input type="number" id="year" name="year" min="1800" placeholder="Enter year of publishing..." value={values.year} onChange={changeHandler} />

                        <label htmlFor="imageUrl">Cover:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Add book cover URL..." value={values.imageUrl} onChange={changeHandler} />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>

                        <div className={styles["buttons"]}>
                            <input className={styles["btn"]} type="submit" value="Add Book" disabled={isPending} />
                            <Link to={`/catalog`} className={styles["btn"]}>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}