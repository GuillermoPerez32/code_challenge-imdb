import { Box } from "@mui/material";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import MovieList from "./components/MovieList/MovieList";
import { useMemo, useState } from "react";

function App() {
  const [movieId, setMovieId] = useState<number | undefined>();

  const movieDetailSection = useMemo(() => {
    return movieId && <MovieDetail movieId={movieId} />;
  }, [movieId]);

  return (
    <Box>
      <Box height="55vh" bgcolor="gray">
        {movieDetailSection}
      </Box>
      <MovieList setMovieId={setMovieId} />
    </Box>
  );
}

export default App;
