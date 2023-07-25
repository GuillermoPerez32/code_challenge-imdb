import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Movie } from "../../types/movie";
import { imdb_images_url } from "../../constants/imdb";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 500 }}>
      <CardActionArea onClick={() => console.log("clicked")}>
        <CardMedia
          component="img"
          height="140"
          image={`${imdb_images_url}${movie.backdrop_path}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
