import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { questionList } from "../questions";

const containerStyle = {
  backgroundImage: 'url("https://w.wallha.com/ws/14/HLeqPxTR.png")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "75% 25%",
  display: "flex",
  justifyContent: "center",
  height: "400px",
};

export default function QuizPage() {
  const importedQuestions = questionList;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuizDone, setIsQuizDone] = useState(false);
  const [isRightAnswerChecked, setIsRightAnswerChecked] = useState(false);
  const [count, setCount] = useState(0);

  const handleRightAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsRightAnswerChecked(event.target.checked);
  };

  const handleNextQuestion = () => {
    if (currentIndex < importedQuestions.length - 1) {
      if (isRightAnswerChecked) {
        setCount(count + 1);
        setIsRightAnswerChecked(false);
      }
      setCurrentIndex(currentIndex + 1);
    } else {
      if (isRightAnswerChecked) {
        setCount(count + 1);
        setIsRightAnswerChecked(false);
      }
      setIsQuizDone(true);
    }
  };

  return (
    <div className="flex justify-center items-center" style={containerStyle}>
      {isQuizDone ? (
        <Card>
          <CardContent>
            <CardMedia
              sx={{ height: "140px" }}
              image={"https://i.imgur.com/Hlfcbe3.jpg"}
              title="cute pig"
            />
            <Typography variant="h6">Ditt resultat: {count} poäng</Typography>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{
            maxWidth: 345,
            maxHeight: 380,
            alignContent: "center",
            justifyContent: "center",
          }}
          key={importedQuestions[currentIndex].question1}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ paddingBottom: 1 }}
              component="div"
            >
              {importedQuestions[currentIndex].question1}
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={importedQuestions[currentIndex].wrongAnswer2}
                sx={{ paddingBottom: 1 }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={importedQuestions[currentIndex].wrongAnswer1}
                sx={{ paddingBottom: 1 }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isRightAnswerChecked}
                    onChange={handleRightAnswerChange}
                    sx={{ paddingBottom: 1 }}
                  />
                }
                label={importedQuestions[currentIndex].rightAnsweer}
              />
            </FormGroup>
          </CardContent>
          <Button onClick={handleNextQuestion}>
            <Typography>Nästa</Typography>
            <NavigateNextIcon />
          </Button>
        </Card>
      )}
    </div>
  );
}
