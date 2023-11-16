import { Link } from "react-router-dom";

function MovieCard({ pelicula }) {
    const { title, overview, poster_path, vote_average, id } = pelicula;
    const realStar = Math.round(vote_average / 2);

    return (
        <Link to={`/${id}`}>
            <article className='moviecard'>
                <div className="moviecard-image">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster of ${title}`} />
                </div>
                <div className='moviecard-description'>
                    <h3>{title}</h3>
                    <p>{overview}</p>
                    <span className="moviecard-vote">
                        ⭐ {realStar}/5
                    </span>
                </div>
            </article>
        </Link>
    );
}

export default MovieCard;
