import styles from './CommentsShow.module.css'

export default function CommentsShow({
    comments,
}) {
    return (
        <div className={styles["comments"]}>
            <h1>Comments:</h1>
            {comments.length > 0
                ? comments.map(comment => (
                    <div key={comment._id} className={styles["comment"]}>
                        <p className={styles['label']}>{comment.name}</p>
                        <p>({comment.email})</p>
                        <hr />
                        <p className={styles['content']}>{comment.comment}</p>
                    </div>
                ))
                : <p>No comments yet.</p>
            }



        </div>
    );
}