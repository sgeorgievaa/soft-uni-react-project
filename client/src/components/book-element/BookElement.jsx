import { Link } from "react-router";

export default function BookElement({
    _id,
    title,
    author,
    year,
    imageUrl,
    summary
}) {
    return (
        <div className="col-md-4">

            <div className="container_main">
                <img src={imageUrl} alt="Book" className="image" />
                <div>
                    <h3>{title}</h3>
                    <h4>{author}</h4>
                    <h4>{year}</h4>
                </div>
                <Link to={`/catalog/${_id}/details`}>
                    <div className="overlay">
                        <div className="text"><i className="fa fa-info-circle" aria-hidden="true"></i></div>
                    </div>
                </Link>
            </div>
        </div>

    );
}