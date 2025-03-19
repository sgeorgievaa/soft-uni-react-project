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
                <div className="overlay">
                    <div className="text"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                </div>
            </div>
        </div>

    );
}