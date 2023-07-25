import { Box, Grid } from "@mui/material";
import { useGetPopularQuery } from "../../services/imdb/imdb";
import { MovieCard } from "./MovieCard";

interface Props {
  setMovieId: (id: number) => void;
}

const MovieList = ({ setMovieId }: Props) => {
  const { data } = useGetPopularQuery(1);
  return (
    <Box padding={8}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data &&
          data.results?.map((movie) => (
            <Grid item xs={4} key={movie.id}>
              <MovieCard movie={movie} onClick={() => setMovieId(movie.id!)} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
