export default function AddBook() {
    return(
        <section id="create-page" className="auth">
        <div class="wrapper">

        <figure>
           <HTMLImageElement src="./public/images/about-img.png" alt="" />
        </figure>

        <form id="create">
            <div className="container-add">

                <h1>Add Book</h1>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Enter book title..." />

                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" placeholder="Enter book author name..." />

                <label htmlFor="publisher">Publisher:</label>
                <input type="text" id="piblisher" name="publisher" placeholder="Enter book publisher name..." />

                <label htmlFor="year">Year of publishing:</label>
                <input type="number" id="year" name="year" min="1800" placeholder="Enter year of publishing..." />

                <label htmlFor="cover">Cover:</label>
                <input type="text" id="coverUrl" name="coverUrl" placeholder="Add book cover..." />

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input className="btn submit" type="submit" value="Add Book" />
            </div>

        </form>
     </div>

    </section>
    );
}