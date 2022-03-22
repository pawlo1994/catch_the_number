import { useState } from "react";
import { AppHeader, GameStartButton, NumberButton, NumberButtonField } from "./styled_app";
import { GlobalStyle } from "./globalStyle";

const App = () => {
  const [intervalID, setIntervalID] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [intervalTime, setIntervalTime] = useState(1000);

  return (
    <>
      <GlobalStyle />
      <AppHeader>
        Welcome to Jumping Numbers
      </AppHeader>
      <p>
        Score: {score}
      </p>
      <p>
        Lives: {+lives}
      </p>
      <GameStartButton
        onClick={
          () => {
            setIsGameStarted(!isGameStarted);
            (lives >= 0) ?
              setIntervalID(setInterval(() => {
                setX(Math.ceil(Math.random() * 200));
                setY(Math.ceil(Math.random() * 100));
                setLives(lives => lives - 1);
              }, intervalTime)) : clearInterval(intervalID);
          }}
      >
        {!isGameStarted ? "START" : "STOP"}
      </GameStartButton>
      <NumberButtonField>
        <NumberButton
          style={{
            left: x > 200 ? x - 40 : x,
            top: y > 300 ? y - 40 : y,
          }}
          onClick={
            () => {
              setX(Math.ceil(Math.random() * 200) + 10);
              setY(Math.ceil(Math.random() * 100) + 10);
              setScore(score + 5);
            }
          }
          disabled={!isGameStarted || lives <= 0}>
          5
        </NumberButton>
      </NumberButtonField>
    </>
  );
}

export default App;
