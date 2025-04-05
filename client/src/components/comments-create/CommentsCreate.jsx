export default function CommentsCreate() {
    return(
        <form action="#" className={"comment-add"}>
        <h1>Add Comment:</h1>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name..." />

        <label htmlFor="comment">Comment:</label>
        <textarea type="text" id="comment" name="comment" placeholder="Enter your comment about this book..." />

        <input className={"btn"} type="submit" value="Add Comment" />

    </form>
    );
}