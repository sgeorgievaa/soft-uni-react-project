import { useState } from 'react';
import { useCreateComment } from '../../api/commentApi';

export default function CommentsCreate({ bookId, onCreate }) {
    const { create } = useCreateComment();
    const [error, setError] = useState('');

    const commentAction = async (formData) => {
        setError('');

        const name = formData.get('name');
        const comment = formData.get('comment');

        if (!name || !comment) {
            setError('Please fill in both your name and a comment.');
            return;
        }

        try {
            const createdComment = await create(bookId, name, comment);
            onCreate(createdComment);
        } catch (err) {
            setError(err.message || 'Could not post your comment. Please try again.');
        }
    };

    return (
        <form action={commentAction} className={"comment-add"}>
            <h1>Add Comment:</h1>

            {error && <p className="form-error">{error}</p>}

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name..." />

            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment" placeholder="Enter your comment about this book..." />

            <input className={"btn"} type="submit" value="Add Comment" />
        </form>
    );
}