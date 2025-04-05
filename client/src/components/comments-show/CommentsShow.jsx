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

                   
        </div>
    );
}