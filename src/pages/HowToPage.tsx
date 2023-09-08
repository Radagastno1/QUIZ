import { List, ListItem, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { recipes } from "../recipe";

export default function HowToPage() {
  const { title } = useParams();

  const receipt = recipes.find((r) => r.title === title);

  return (
    <Paper>
      <List>
        {receipt?.howto.map((h) => (
          <ListItem>{h}</ListItem>
        ))}
      </List>
    </Paper>
  );
}
