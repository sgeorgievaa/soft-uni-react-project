import { useState } from 'react';
import BookElement from '../book-element/BookElement';
import request from '../../utils/request';
import styles from './Search.module.css';

const baseUrl = 'http://localhost:3030/data/books';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchField, setSearchField] = useState('title');
    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState('');

    const searchHandler = async (e) => {
        e.preventDefault();
        setError('');

        const trimmed = searchTerm.trim();

        if (!trimmed) {
            setError('Please enter something to search for.');
            return;
        }

        try {
            const searchParams = new URLSearchParams({
                where: `${searchField} like "${trimmed}"`,
            });

            const data = await request.get(`${baseUrl}?${searchParams.toString()}`);
            setResults(data);
            setHasSearched(true);
        } catch (err) {
            setError(err.message || 'Search failed. Please try again.');
        }
    };

    return (
        <div className={styles['search-page']}>
            <div className={styles['search-form-wrapper']}>
                <h1>Search Books</h1>

                <form onSubmit={searchHandler} className={styles['search-form']}>
                    <select
                        value={searchField}
                        onChange={(e) => setSearchField(e.target.value)}
                        className={styles['search-select']}
                    >
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="genre">Genre</option>
                    </select>

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter search term..."
                        className={styles['search-input']}
                    />

                    <button type="submit" className={styles['search-btn']}>Search</button>
                </form>

                {error && <p className="form-error">{error}</p>}
            </div>

            <div className="gallery_section_2">
                <div className="row">
                    {!hasSearched
                        ? <p>Enter a search term above to find books.</p>
                        : results.length > 0
                            ? results.map(book => <BookElement key={book._id} {...book} />)
                            : <p>No books match your search.</p>
                    }
                </div>
            </div>
        </div>
    );
}