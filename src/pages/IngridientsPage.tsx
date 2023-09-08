import { List, ListItem, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { recipes } from "../recipe";

export default function IngridientsPage() {
  const { title } = useParams();

  const receipt = recipes.find((r) => r.title === title);

  return (
    <div>
      <Paper>
        <List>
          {receipt?.ingridients.map((i) => (
            <ListItem>{i}</ListItem>
          ))}
          ;
        </List>
      </Paper>
    </div>
  );
}
