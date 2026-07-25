import { useState } from 'react';
import styles from './BookDetails.module.css'
import { Link, useNavigate, useParams } from 'react-router';
import CommentsShow from '../comments-show/CommentsShow';
import CommentsCreate from '../comments-create/CommentsCreate';
import { useBook, useDeleteBook } from '../../api/bookApi';
import { useComments } from '../../api/commentApi';
import { useLikes, useToggleLike } from '../../api/likeApi';
import useAuth from '../../hooks/useAuth';


export default function BookDetails() {
    const navigate = useNavigate();
    const { userId, isAuthenticated } = useAuth();
    const { bookId } = useParams();
    const { book } = useBook(bookId);
    const { deleteBook } = useDeleteBook();
    const { comments, setComments } = useComments(bookId);
    const { likesCount, hasLiked, myLike, refetchLikes } = useLikes(bookId);
    const { like, unlike } = useToggleLike();
    const [likeError, setLikeError] = useState('');

    const bookDeleteClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${book.title} book?`);

        if (!hasConfirmed) {
            return;
        }

        try {
            await deleteBook(bookId);
            navigate('/catalog');
        } catch (err) {
            alert(err.message || 'Could not delete the book.');
        }
    }

    const commentCreateHandler = (newComment) => {
        setComments(state => [newComment, ...state]);
    };

    const likeClickHandler = async () => {
        setLikeError('');

        try {
            if (hasLiked) {
                await unlike(myLike._id);
            } else {
                await like(bookId);
            }
            refetchLikes();
        } catch (err) {
            setLikeError(err.message || 'Could not update your like. Please try again.');
        }
    };

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

                            <div className={styles['buttons-div']}>
                                {isAuthenticated
                                    ? (
                                        <button onClick={likeClickHandler} className={styles["btn"]}>
                                            {hasLiked ? 'Unlike' : 'Like'} ({likesCount})
                                        </button>
                                    )
                                    : <p>{likesCount} {likesCount === 1 ? 'like' : 'likes'}</p>
                                }

                                {isOwner && (
                                    <>
                                        <Link to={`/catalog/${bookId}/edit`} className={styles["btn"]}>Edit</Link>
                                        <button onClick={bookDeleteClickHandler} className={styles["btn"]}>Delete</button>
                                    </>
                                )}
                            </div>

                            {likeError && <p className="form-error">{likeError}</p>}
                        </div>

                    </div>


                </div>

                <CommentsShow comments={comments} />

                {isAuthenticated
                    ? <CommentsCreate bookId={bookId} onCreate={commentCreateHandler} />
                    : <p>Please <Link to="/login">log in</Link> to leave a comment.</p>
                }

            </div>
        </section>
    );
}