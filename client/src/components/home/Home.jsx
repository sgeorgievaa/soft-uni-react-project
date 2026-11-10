import { Link } from 'react-router';
import About from "../about/About";
import BookElement from "../book-element/BookElement";
import { useLatestBook } from "../../api/bookApi";

export default function Home() {
    const { latestBooks, isLoading } = useLatestBook();

    return (
        <>
            <About />

            <div className="gallery_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="gallery_taital">Latest Books</h1>
                        </div>
                    </div>
                    <div className="gallery_section_2">
                        <div className="row">
                            {isLoading
                                ? <p>Loading...</p>
                                : latestBooks.length > 0
                                ? latestBooks.map(book => <BookElement key={book._id} {...book} />)
                                : <p>No books yet.</p>
                            }
                        </div>
                    </div>
                    <div className="seemore_bt">
                        <Link to="/catalog">See All Books</Link>
                    </div>
                </div>
            </div>
        </>
    );
}