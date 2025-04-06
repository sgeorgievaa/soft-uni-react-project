import { useNavigate, useParams } from 'react-router'

import styles from './EditBook.module.css'
import { useBook, useEditBook } from '../../api/bookApi';

export default function EditBook() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const { book } = useBook(bookId)
    const { edit } = useEditBook();

    const formAction = async (formData) => {
        const bookData = Object.fromEntries(formData);

        await edit(bookId, bookData);

        navigate(`/catalog/${bookId}/details`)
    }

    return (
        <section id={styles["create-page"]} className="auth">
            <div className={styles["wrapper"]}>

                <form id={styles["create"]} action={formAction}>
                    <div className={styles["container-add"]}>

                        <h1>Edit Book</h1>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" defaultValue={book.title} />

                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" defaultValue={book.author} />

                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" defaultValue={book.genre} />

                        <label htmlFor="year">Year of publishing:</label>
                        <input type="number" id="year" name="year" min="1800" defaultValue={book.year} />

                        <label htmlFor="cover">Cover:</label>
                        <input type="text" id="imageUrl" name="imageUrl" defaultValue={book.imageUrl} />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" defaultValue={book.summary}></textarea>
                        <input className={styles["btn"]} type="submit" value="Edit Book" />
                    </div>

                </form>
            </div>

        </section>
    );
}