import { useRef, useState } from "react";
import { GameStartButton } from "./styled_app.js";
import { GlobalStyle } from "./globalStyle.js";
import { AppHeader } from "./AppHeader";
import { GameInfo } from "./GameInfo";
import { NumberButtonField } from "./NumberButtonField/index.js";
import { useChangeIntervalTime } from "./useChangeIntervalTime.js";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [currentIntervalTime, setCurrentIntervalTime] = useState(1000);
  const intervalID = useRef(null);

  const { changeIntervalTime } =
    useChangeIntervalTime(
      intervalID,
      setX,
      setY,
      setLives,
      lives,
      isGameStarted,
      currentIntervalTime);

  return (
    <>
      <GlobalStyle />
      <AppHeader content="c4tch th3 numb3r" />
      <GameInfo
        score={score}
        lives={lives}
        currentIntervalTime={currentIntervalTime}
        isGameStarted={isGameStarted}
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
              changeIntervalTime(setCurrentIntervalTime(currentIntervalTime));
            }
            else {
              setIsGameStarted(false);
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
        currentIntervalTime={currentIntervalTime}
        setCurrentIntervalTime={setCurrentIntervalTime}
        changeIntervalTime={changeIntervalTime}
        isGameStarted={isGameStarted}
      />
    </>
  );
}

export default App;
