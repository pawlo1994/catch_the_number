import { useDispatch, useSelector } from "react-redux";
import {
    resetScoreAndLives,
    setNewIntervalTime,
    toggleIsGameStarted,
    selectIntervalTime,
    selectIsGameStarted,
    selectLives
} from "../gameStatsSlice";
import { StyledGameStartButton } from "./styled";

export const GameStartButton = ({ changeIntervalTime, intervalID }) => {
    const dispatch = useDispatch();
    const intervalTime = useSelector(state => selectIntervalTime(state));
    const isGameStarted = useSelector(state => selectIsGameStarted(state));
    const lives = useSelector(state => selectLives(state));
    return (
        <StyledGameStartButton
            onClick={
                () => {
                    dispatch(toggleIsGameStarted());
                    dispatch(setNewIntervalTime(1000));
                    if (lives !== 0 && !isGameStarted) {
                        changeIntervalTime(intervalTime);
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
        </StyledGameStartButton>
    );
};