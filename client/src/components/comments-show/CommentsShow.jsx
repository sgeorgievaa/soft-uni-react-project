import styles from './CommentsShow.module.css'

export default function CommentsShow() {
    return(
        <div className={styles["comments"]}>
                    <h1>Comments:</h1>
                    <div className={styles["comment"]}>
                        <p className={styles['label']}>Anna</p>
                        <hr />
                        <p className={styles['content']}>Best book ever</p>
                    </div> 

                    <form action="#" className={styles["comment-add"]}>
                        <h1>Add Comment:</h1>

                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name..." />

                        <label htmlFor="comment">Comment:</label>
                        <textarea type="text" id="comment" name="comment" placeholder="Enter your comment about this book..." />

                        <input className={styles["btn"]} type="submit" value="Add Comment" />

                    </form>
        </div>
    );
}