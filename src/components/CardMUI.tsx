import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  path: string;
}

export default function Cart(props: Props) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
      <CardMedia sx={{ height: 140 }} image={props.image} title="card title" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => navigate(props.path)}>
          <Typography sx={{ color: "black", fontWeight: "bold" }}>
            {props.buttonText}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
