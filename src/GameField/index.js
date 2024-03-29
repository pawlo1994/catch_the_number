import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
    changeCurrentGameState,
    setNewIntervalTime,
    selectLives,
    selectX,
    selectY,
    selectIntervalTime,
    selectScore,
    toggleIsGameStarted,
    selectIsGameStarted,
    selectIsGameFieldButtonMissclicked
} from "../gameStatsSlice";
import {
    GameFieldButton,
    StyledGameField
} from "./styled";
import { useTransitionTime } from "./useTransitionTime";
import { useHighScore } from "./useHighScore";

export const GameField = ({ intervalID, changeIntervalTime }) => {
    const dispatch = useDispatch();
    const x = useSelector(state => selectX(state));
    const y = useSelector(state => selectY(state));
    const lives = useSelector(state => selectLives(state));
    const score = useSelector(state => selectScore(state));
    const isGameStarted = useSelector(state => selectIsGameStarted(state));
    const isGameFieldButtonMissclicked = useSelector(state => selectIsGameFieldButtonMissclicked(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    const transitionTime = useTransitionTime();
    const highScore = useHighScore();

    useEffect(() => {
        if (lives === 0 && isGameStarted) {
            dispatch(toggleIsGameStarted());
            clearInterval(intervalID.current);
        }
    });

    return (
        <StyledGameField
            gameOver={lives === 0}
        >
            {(lives !== 0)
                ?
                <motion.div
                    animate={
                        isGameFieldButtonMissclicked ?
                            {
                                filter: "hue-rotate(235deg)",
                            } :
                            "unset"
                    }
                    transition={
                        {
                            ease: "linear",
                            duration: `${transitionTime / 10}`,
                        }
                    }
                >
                    <GameFieldButton
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                            transition: `${transitionTime}s`,
                        }}
                        onClick={() => {
                            if (!isGameStarted) {
                                dispatch(toggleIsGameStarted());
                            }
                            dispatch(changeCurrentGameState(lives));
                            clearInterval(intervalID.current);
                            changeIntervalTime(intervalTime);
                            if (score === 100) {
                                dispatch(setNewIntervalTime(800));
                            }
                            if (score === 200) {
                                dispatch(setNewIntervalTime(600));
                            }
                            if (score === 300) {
                                dispatch(setNewIntervalTime(400));
                            }
                            if (score === 400) {
                                dispatch(setNewIntervalTime(200));
                            }
                        }}
                        disabled={!isGameStarted}>
                        5
                    </GameFieldButton>
                </motion.div>
                :
                <>
                    {(score > highScore) ?
                        localStorage.setItem('highScore', score) : localStorage.setItem('highScore', highScore)}
                    game over. click on restart button to try again
                </>}
        </StyledGameField>
    )
};