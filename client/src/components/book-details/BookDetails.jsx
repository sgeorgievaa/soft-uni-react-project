import { useEffect, useState } from 'react';
import styles from './BookDetails.module.css'
import { Link, useNavigate, useParams } from 'react-router';
import bookService from '../../services/bookService';
import CommentsShow from '../comments-show/CommentsShow';
import CommentsCreate from '../comments-create/CommentsCreate';


export default function BookDetails({
    email,
}) {
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await bookService.getOne(bookId);
            setBook(result);
        })();
    }, [bookId]);

    const bookDeleteClickHandler = async () => {

        const hasConfirmed = confirm(`Are you sure you want to delete ${book.title} book?`);

        if (!hasConfirmed) {
            return;
        }


        await bookService.delete(bookId);

        navigate('/catalog');
    }

    return (
        <section id={styles["create-page"]} className="auth">
            <div className={styles["wrapper-out"]}>

                <div className={styles["wrapper"]}>

                    <figure>
                        <img src={book.imageUrl} alt="Cover image unavailable" />
                    </figure>

                    <div id={styles["create"]}>
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

                                <Link to={`/catalog/${bookId}/edit`} className={styles["btn"]}>Edit</Link>
                                <button
                                    onClick={bookDeleteClickHandler}
                                    className={styles["btn"]}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>


                </div>

                <CommentsShow />

                <CommentsCreate email={email} bookId={bookId}/>
                
            </div>
        </section>
    );
}