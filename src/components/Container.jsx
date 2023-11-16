import MovieCard from "./MovieCard.jsx";
import { useState, useEffect } from 'react';

function Container() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    try {
      setLoader(true);
      const url = `${import.meta.env.VITE_URL}?language=en-US&page=${page}`;
      const config = {
        method: "GET",
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
        }
      };
      const response = await fetch(url, config);
      if (response.status === 200) {
        const res = await response.json();
        setMovies(prevMovies => [...prevMovies, ...res.results]);
      } else {
        throw new Error('Failed to fetch movies');
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoader(false);
    }
  };

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <>
      <main className="container content" id='mimain'>
        {movies.map((pelicula) => (
          <MovieCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </main>
      {loader ? <p className='loader'>Cargando...</p> : <button className='btn-seemore' onClick={handleClick}>Ver más</button>}
    </>
  );
}

export default Container;
