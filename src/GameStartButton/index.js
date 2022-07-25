import { useDispatch, useSelector } from "react-redux";
import {
    resetGameState,
    toggleIsGameStarted,
    selectIntervalTime,
    selectIsGameStarted,
    selectLives
} from "../gameStatsSlice";
import { GameStartButtonIcon, StyledGameStartButton } from "./styled";
import play from "./play.png";
import restart from "./restart.png";

export const GameStartButton = ({ changeIntervalTime, intervalID }) => {
    const dispatch = useDispatch();
    const intervalTime = useSelector(state => selectIntervalTime(state));
    const isGameStarted = useSelector(state => selectIsGameStarted(state));
    const lives = useSelector(state => selectLives(state));
    return (
        !isGameStarted &&
        <StyledGameStartButton
            onClick={
                () => {
                    if (lives !== 0 && !isGameStarted) {
                        changeIntervalTime(intervalTime);
                        dispatch(toggleIsGameStarted());
                    }
                    else {
                        dispatch(resetGameState());
                    }
                }
            }
        >
            <GameStartButtonIcon src={lives !== 0 ? play : restart} alt={lives !== 0 ? "play" : "restart"} />
        </StyledGameStartButton>
    );
};