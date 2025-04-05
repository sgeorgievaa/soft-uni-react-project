import { useEffect, useState } from 'react';
import styles from './BookDetails.module.css'
import { useParams } from 'react-router';
import bookService from '../../services/bookService';

export default function BookDetails() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await bookService.getOne(bookId);
            setBook(result);
        })();
    }, [bookId]);

    return (
        <section id={styles["create-page"]} className="auth">
            <div className={styles["wrapper"]}>

                <figure>
                    <img src={book.imageUrl} alt="Cover image unavailable" />
                </figure>

                <form id={styles["create"]}>
                    <div className={styles["container-add"]}>

                        <h1>{book.title}</h1>
                        <p className={styles['label']}>Author:</p>
                        <p className={styles['content']}>{book.author}</p>
                        <p className={styles['label']}>Genre:</p>
                        <p className={styles['content']}>{book.genre}</p>
                        <p className={styles['label']}>Year of publishing:</p>
                        <p className={styles['content']}>{book.year}</p>
                        <p className={styles['label']}>Summary:</p>
                        <p className={styles['content-summary']}>{book.summary}</p>

                        <div className={styles['buttons-div']}>

                            <input className={styles["btn"]} type="submit" value="Edit" />
                            <input className={styles["btn"]} type="submit" value="Delete" />
                        </div>
                    </div>

                </form>
            </div>

        </section>
    );
}