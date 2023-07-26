import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { useGetMovieDetailQuery } from "../../services/imdb/imdb";
import { imdb_images_url } from "../../constants/imdb";
import { StarRate } from "@mui/icons-material";

interface Props {
  movieId: number;
}

const MovieDetail = ({ movieId }: Props) => {
  const { data } = useGetMovieDetailQuery(movieId);

  return (
    data && (
      <Box
        width="100vh"
        height="100%"
        display="flex"
        padding={4}
        color="white"
        gap={8}
      >
        <Card sx={{ height: 300, width: 250 }}>
          <CardMedia
            component="img"
            height="100%"
            image={`${imdb_images_url}${data.backdrop_path}`}
          />
        </Card>
        <Box width={500}>
          <Typography variant="h3">{data.title}</Typography>
          <Box pl={2}>
            <Typography variant="subtitle1" color="yellowgreen">
              {data.vote_average?.toFixed(1)} / 10{" "}
              <StarRate color="primary" sx={{ fontSize: "18px" }} />
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" color="gray">
              {data.runtime} min
            </Typography>
            <Typography variant="body1">
              {data.genres?.map((genre) => genre.name).join(", ")}
            </Typography>
          </Box>
          <Box pt={2}>
            <Typography variant="body1">{data.overview}</Typography>
          </Box>
          {data.homepage && (
            <Button
              href={data.homepage}
              variant="contained"
              target="_blank"
              sx={{ marginTop: 2 }}
            >
              Go To Movie Site
            </Button>
          )}
        </Box>
      </Box>
    )
  );
};

export default MovieDetail;
