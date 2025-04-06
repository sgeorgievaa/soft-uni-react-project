import { useNavigate } from 'react-router'

import styles from './AddBook.module.css'
import { useCreateBook } from '../../api/bookApi';

export default function AddBook() {
    const navigate = useNavigate();
    const { create } = useCreateBook();

    const submitAction = async (formData) => {
        const bookData = Object.fromEntries(formData);

        await create(bookData);

        navigate('/catalog');
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
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter book title..." />

                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" placeholder="Enter book author name..." />

                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter book genre..." />

                        <label htmlFor="year">Year of publishing:</label>
                        <input type="number" id="year" name="year" min="1800" placeholder="Enter year of publishing..." />

                        <label htmlFor="cover">Cover:</label>
                        <input type="text" id="coverUrl" name="coverUrl" placeholder="Add book cover..." />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary"></textarea>
                        <input className={styles["btn"]} type="submit" value="Add Book" />
                    </div>

                </form>
            </div>

        </section>
    );
}