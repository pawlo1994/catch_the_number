import { useDispatch, useSelector } from "react-redux";
import { decreaseLives, selectIsGameStarted, selectLives, setNewNumberButtonPosition, toggleIsGameStarted } from "./gameStatsSlice";

export const useChangeIntervalTime = (intervalID, currentIntervalTime) => {
    const dispatch = useDispatch();
    const isGameStarted = useSelector(state => selectIsGameStarted(state));
    const lives = useSelector(state => selectLives(state));
    const changeIntervalTime = () => {
        intervalID.current = setInterval(() => {
            dispatch(setNewNumberButtonPosition());
            if (lives !== 0) {
                dispatch(decreaseLives());
            };
            if (lives === 0) {
                clearInterval(intervalID.current);
            }
        }, currentIntervalTime);
        if (isGameStarted && lives === 0) {
            clearInterval(intervalID.current);
        }
    };
    return { changeIntervalTime };
};