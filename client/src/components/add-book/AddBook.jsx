import { useState } from 'react'
import { useNavigate } from 'react-router'

import styles from './AddBook.module.css'
import { useCreateBook } from '../../api/bookApi';

export default function AddBook() {
    const navigate = useNavigate();
    const { create } = useCreateBook();
    const [error, setError] = useState('');

    const submitAction = async (formData) => {
        setError('');

        const bookData = Object.fromEntries(formData);

        if (!bookData.title || !bookData.author || !bookData.genre || !bookData.year) {
            setError('Please fill in all required fields.');
            return;
        }

        if (Number(bookData.year) < 1800 || Number(bookData.year) > new Date().getFullYear()) {
            setError('Please enter a valid publishing year.');
            return;
        }

        try {
            await create(bookData);
            navigate('/catalog');
        } catch (err) {
            setError(err.message || 'Something went wrong while adding the book. Please try again.');
        }
    }

    return (
        <section id={styles["create-page"]} className="auth">
            <div className={styles["wrapper"]}>

                <figure>
                    <img src={"./public/images/about-img.png"} alt="" />
                </figure>

                <form id={styles["create"]} action={submitAction}>
                    <div className={styles["container-add"]}>

                        <h1>Add Book</h1>

                        {error && <p className={styles["error"]}>{error}</p>}

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter book title..." />

                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" placeholder="Enter book author name..." />

                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter book genre..." />

                        <label htmlFor="year">Year of publishing:</label>
                        <input type="number" id="year" name="year" min="1800" placeholder="Enter year of publishing..." />

                        <label htmlFor="cover">Cover:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Add book cover..." />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary"></textarea>
                        <input className={styles["btn"]} type="submit" value="Add Book" />
                    </div>

                </form>
            </div>

        </section>
    );
}