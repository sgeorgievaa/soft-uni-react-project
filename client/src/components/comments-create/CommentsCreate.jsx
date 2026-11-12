import { useState } from 'react';
import { useCreateComment } from '../../api/commentApi';

export default function CommentsCreate({ bookId, onCreate }) {
    const { create } = useCreateComment();

    const [values, setValues] = useState({ name: '', comment: '' });
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

        const name = values.name.trim();
        const comment = values.comment.trim();

        if (!name || !comment) {
            setError('Please fill in both your name and a comment.');
            return;
        }

        if (name.length > 100) {
            setError('Your name must be at most 100 characters long.');
            return;
        }

        if (comment.length > 1000) {
            setError('Your comment must be at most 1000 characters long.');
            return;
        }

        setIsPending(true);

        try {
            const createdComment = await create(bookId, name, comment);
            onCreate(createdComment);
            setValues(state => ({ ...state, comment: '' }));
        } catch (err) {
            setError(err.message || 'Could not post your comment. Please try again.');
        } finally {
            setIsPending(false);
        }
    };

    return (
        <form onSubmit={submitHandler} className="comment-add">
            <h1>Add Comment:</h1>

            {error && <p className="form-error">{error}</p>}

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                value={values.name}
                onChange={changeHandler}
            />

            <label htmlFor="comment">Comment:</label>
            <textarea
                id="comment"
                name="comment"
                placeholder="Enter your comment about this book..."
                value={values.comment}
                onChange={changeHandler}
            />

            <input className="btn" type="submit" value="Add Comment" disabled={isPending} />
        </form>
    );
}