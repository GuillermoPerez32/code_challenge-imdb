import { Box, Grid } from "@mui/material";
import { useGetPopularQuery } from "../../services/imdb/imdb";
import { MovieCard } from "./MovieCard";

const MovieList = () => {
  const { data } = useGetPopularQuery("");
  return (
    <Box padding={8} justifyContent="center" alignItems="center">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <div>
          {data &&
            data.results?.map((movie) => (
              <Grid item xs={4} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
        </div>
      </Grid>
    </Box>
  );
};

export default MovieList;
