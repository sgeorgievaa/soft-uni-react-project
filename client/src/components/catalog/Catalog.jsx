import BookElement from "../book-element/BookElement";
import { useBooks } from "../../api/bookApi";

export default function Catalog() {
    const { books, isLoading } = useBooks();

    return (
        <div className="gallery_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="gallery_taital">All Books</h1>
                    </div>
                </div>
                <div className="">
                    <div className="gallery_section_2">
                        <div className="row">
                            {isLoading
                                ? <h3>Loading...</h3>
                                : books.length > 0
                                ? books.map(book => <BookElement key={book._id} {...book} />)
                                : <h3>There are no books yet.</h3>
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}