import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { recipes } from "../recipe";

const recipeList = recipes;

const containerStyle = {
  backgroundImage: 'url("https://wallpapercave.com/wp/wp3104841.jpg")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "75% 10%",
  height: "450px",
};

export default function FoodPage() {
  return (
    <div className="flex flex-col" style={containerStyle}>
      <Paper
        elevation={1}
        sx={{
          padding: 2,
          marginBottom: 2,
          marginTop: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#bcaaa4",
        }}
      >
        <Typography variant="h4">Recept - växtbaserade</Typography>
      </Paper>
      {recipeList.map((r) => (
        <Card>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <CardMedia
              image={r.image}
              title="mat"
              sx={{ width: 100, height: 50, marginRight: 2 }}
            />
            <NavLink to={r.title}>
              <Typography variant="h6">{r.title}</Typography>
            </NavLink>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
