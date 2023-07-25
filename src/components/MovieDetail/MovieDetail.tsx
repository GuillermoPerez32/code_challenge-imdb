import { Box } from "@mui/material";
import { useGetMovieDetailQuery } from "../../services/imdb/imdb";
import { imdb_images_url } from "../../constants/imdb";

interface Props {
  movieId: number;
}

const MovieDetail = ({ movieId }: Props) => {
  const { data } = useGetMovieDetailQuery(movieId);
  // console.log("data.poster_path", data.poster_path);
  // console.log("data.id", data.id);
  // console.log("imdb_images_url", imdb_images_url);

  return (
    data && (
      <Box width="100%" height="100%">
        <Box
          width="100%"
          height="100%"
          sx={{ objectFit: "cover" }}
          position="relative"
          zIndex={0}
        >
          <img src={imdb_images_url + data.backdrop_path} alt="" />
        </Box>
        <Box zIndex={1}>{data.id}</Box>
      </Box>
    )
  );
};

export default MovieDetail;
