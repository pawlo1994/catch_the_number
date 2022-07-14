import { useDispatch, useSelector } from "react-redux";
import {
    resetGameState,
    toggleIsGameStarted,
    selectIntervalTime,
    selectIsGameStarted,
    selectLives
} from "../gameStatsSlice";
import { StyledGameStartButton } from "./styled";
import play from "./play.png";
import restart from "./restart.png";

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
                    if (lives !== 0 && !isGameStarted) {
                        changeIntervalTime(intervalTime);
                    }
                    else {
                        clearInterval(intervalID.current);
                        dispatch(toggleIsGameStarted());
                        dispatch(resetGameState());
                    }
                }
            }
            hidden={isGameStarted && lives !== 0}
        >
            <img src={!isGameStarted ? play : restart} alt={!isGameStarted ? "play" : "restart"} />
        </StyledGameStartButton>
    );
};