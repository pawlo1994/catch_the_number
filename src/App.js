import { useRef, useState } from "react";
import { GameStartButton } from "./styled_app.js";
import { GlobalStyle } from "./globalStyle.js";
import { AppHeader } from "./AppHeader";
import { GameInfo } from "./GameInfo";
import { NumberButtonField } from "./NumberButtonField/index.js";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const intervalID = useRef(null);

  const setIntervalTime = (intervalTime) => {
    intervalID.current = setInterval(() => {
      setX(Math.ceil(Math.random() * 200));
      setY(Math.ceil(Math.random() * 100));
      setLives(lives => lives > 0 ? lives - 1 : lives);
    }, intervalTime);
    if (isGameStarted && lives === 0) {
      clearInterval(intervalID.current);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppHeader content="c4tch th3 numb3r" />
      <GameInfo
        score={score}
        lives={lives}
      />
      <GameStartButton
        onClick={
          () => {
            if (lives === 0) {
              setLives(5);
              setScore(0);
            }
            setIsGameStarted(true);
            if (lives !== 0 && !isGameStarted) {
              setIntervalTime(1000)
            }
            else {
              setIsGameStarted(false)
              clearInterval(intervalID.current);
            }
          }
        }
        hidden={isGameStarted && lives !== 0}
      >
        {!isGameStarted ? "▶️" : "⏹"}
      </GameStartButton>
      <NumberButtonField
        lives={lives}
        intervalID={intervalID}
        x={x}
        setX={setX}
        y={y}
        setY={setY}
        score={score}
        setScore={setScore}
        setIntervalTime={setIntervalTime}
        isGameStarted={isGameStarted}
      />
    </>
  );
}

export default App;
