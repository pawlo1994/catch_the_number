import { useRef, useState } from "react";
import { GameStartButton } from "./styled_app.js";
import { GlobalStyle } from "./globalStyle.js";
import { AppHeader } from "./AppHeader";
import { GameInfo } from "./GameInfo";
import { NumberButtonField } from "./NumberButtonField/index.js";
import { useChangeIntervalTime } from "./useChangeIntervalTime.js";
import { useDispatch, useSelector } from "react-redux";
import { resetScoreAndLives, selectIsGameStarted, selectLives, toggleIsGameStarted } from "./gameStatsSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector(state => selectIsGameStarted(state));
  const lives = useSelector(state => selectLives(state));
  const [currentIntervalTime, setCurrentIntervalTime] = useState(1000);
  const intervalID = useRef(null);

  const { changeIntervalTime } =
    useChangeIntervalTime(
      intervalID,
      currentIntervalTime);

  return (
    <>
      <GlobalStyle />
      <AppHeader content="c4tch th3 numb3r" />
      <GameInfo
        currentIntervalTime={currentIntervalTime}
      />
      <GameStartButton
        onClick={
          () => {
            dispatch(toggleIsGameStarted());
            if (lives !== 0 && !isGameStarted) {
              changeIntervalTime(setCurrentIntervalTime(currentIntervalTime));
            }
            else {
              dispatch(toggleIsGameStarted());
              dispatch(resetScoreAndLives());
              clearInterval(intervalID.current);
            }
          }
        }
        hidden={isGameStarted && lives !== 0}
      >
        {!isGameStarted ? "▶️" : "🔁"}
      </GameStartButton>
      <NumberButtonField
        intervalID={intervalID}
        currentIntervalTime={currentIntervalTime}
        setCurrentIntervalTime={setCurrentIntervalTime}
        changeIntervalTime={changeIntervalTime}
        isGameStarted={isGameStarted}
      />
    </>
  );
}

export default App;
