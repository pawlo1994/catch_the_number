import { useState } from "react";
import { GameStartButton, NumberButton, NumberButtonField } from "./styled_app";
import { GlobalStyle } from "./globalStyle";
import { AppHeader } from "./AppHeader";
import { GameInfo } from "./GameInfo";

const App = () => {
  const [intervalID, setIntervalID] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);

  const setIntervalTime = (intervalTime) => {
    setIntervalID(setInterval(() => {
      setX(Math.ceil(Math.random() * 200));
      setY(Math.ceil(Math.random() * 100));
      setLives(lives => lives > 0 ? lives - 1 : lives);
      if (lives === 0) {
        setIsGameStarted(!isGameStarted);
        clearInterval(intervalID);
      }
    }, intervalTime))
  };

  return (
    <>
      <GlobalStyle />
      <AppHeader content="Skaczące cyferki" />
      <GameInfo
        score={score}
        lives={lives}
      />
      <GameStartButton
        onClick={
          () => {
            setLives(5);
            setScore(0);
            setIsGameStarted(!isGameStarted);
            if (lives !== 0 && !isGameStarted) {
              setIntervalTime(1000)
            }
            if (lives === 0) {
              setIsGameStarted(!isGameStarted);
              clearInterval(intervalID);
            }
          }
        }
      >
        {!isGameStarted ? "▶️" : "⏹️"}
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
              clearInterval(intervalID);
              score <= 100 && lives > 0 ?
                setIntervalTime(1000)
                : score > 100 && score <= 200 && lives > 0
                  ? setIntervalTime(500)
                  : lives > 0
                    ? setIntervalTime(300)
                    : clearInterval(intervalID)
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
