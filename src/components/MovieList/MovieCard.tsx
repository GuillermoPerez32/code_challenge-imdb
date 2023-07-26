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
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: Props) => {
  const handleClick = () => {
    onClick();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Card sx={{ minWidth: 200, maxWidth: 500 }}>
      <CardActionArea onClick={handleClick}>
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
