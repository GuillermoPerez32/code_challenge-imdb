import { useGetPopularQuery } from "../../services/imdb/imdb";

const MovieList = () => {
  const { data } = useGetPopularQuery("populars");
  return (
    <div>
      {data &&
        data.results?.map((movie) => (
          <div key={movie.id}>{movie.overview}</div>
        ))}
    </div>
  );
};

export default MovieList;
