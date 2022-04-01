import { useDispatch, useSelector } from "react-redux";
import { decreaseLives, selectIntervalTime, selectIsGameStarted, selectLives, setNewNumberButtonPosition } from "./gameStatsSlice";

export const useChangeIntervalTime = (intervalID) => {
    const dispatch = useDispatch();
    const isGameStarted = useSelector(state => selectIsGameStarted(state));
    const lives = useSelector(state => selectLives(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    const changeIntervalTime = () => {
        intervalID.current = setInterval(() => {
            dispatch(setNewNumberButtonPosition(lives));
            if (lives !== 0) {
                dispatch(decreaseLives());
            };
            if (lives === 0) {
                clearInterval(intervalID.current);
            }
        }, intervalTime);
        if (isGameStarted && lives === 0) {
            clearInterval(intervalID.current);
        }
    };
    return { changeIntervalTime };
};