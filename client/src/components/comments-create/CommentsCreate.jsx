import commentService from "../../services/commentService";

export default function CommentsCreate({
    email,
    bookId,
    onCreate,
}) {
    const commentAction = async (formData) => {
        const name = formData.get('name');
        const comment = formData.get('comment');

        const createdComment = await commentService.create(email, bookId, name, comment);

        onCreate(createdComment);
    }

    return(
        <form action={commentAction} className={"comment-add"}>
        <h1>Add Comment:</h1>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name..." />

        <label htmlFor="comment">Comment:</label>
        <textarea type="text" id="comment" name="comment" placeholder="Enter your comment about this book..." />

        <input className={"btn"} type="submit" value="Add Comment" />

    </form>
    );
}