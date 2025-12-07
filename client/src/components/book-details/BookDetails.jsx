import { useEffect, useState } from 'react';
import styles from './BookDetails.module.css'
import { Link, useNavigate, useParams } from 'react-router';
import CommentsShow from '../comments-show/CommentsShow';
import CommentsCreate from '../comments-create/CommentsCreate';
import commentService from '../../services/commentService';
import { useBook, useDeleteBook } from '../../api/bookApi';
import useAuth from '../../hooks/useAuth';


export default function BookDetails() {
    const navigate = useNavigate();
    const { email, userId } = useAuth();
    const [comments, setComments] = useState([]);
    const { bookId } = useParams();
    const { book } = useBook(bookId);
    const {deleteBook} = useDeleteBook();

    // useEffect(() => {
    //     commentService.getAll(bookId)
    //         .then(setComments);
    // }, [bookId]);

    const bookDeleteClickHandler = async () => {

        const hasConfirmed = confirm(`Are you sure you want to delete ${book.title} book?`);

        if (!hasConfirmed) {
            return;
        }

        console.log(book);
        
        await deleteBook(bookId);

        navigate('/catalog');
    }

    const commentCreateHandler = (newComment) => {
        setComments(state => [...state, newComment]);
    };

    // const isOwner = true;
    const isOwner = userId === book._ownerId;

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

                            { isOwner && (<div className={styles['buttons-div']}>

                                <Link to={`/catalog/${bookId}/edit`} className={styles["btn"]}>Edit</Link>
                            
                                <button
                                    onClick={bookDeleteClickHandler}
                                    className={styles["btn"]}
                                >
                                    Delete
                                </button>
                            </div>)
                            }
                        </div>

                    </div>


                </div>

                <CommentsShow comments={comments} />

                <CommentsCreate
                    email={email}
                    bookId={bookId}
                    onCreate={commentCreateHandler}
                />

            </div>
        </section>
    );
}