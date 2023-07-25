import { Box } from "@mui/material";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <Box>
      <MovieDetail />
      <MovieList />
    </Box>
  );
}

export default App;
