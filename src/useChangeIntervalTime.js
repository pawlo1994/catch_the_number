import { useDispatch, useSelector } from "react-redux";
import {
    decreaseLives,
    selectIntervalTime,
    selectLives,
    toggleIsGameStarted
} from "./gameStatsSlice";

export const useChangeIntervalTime = (intervalID) => {
    const dispatch = useDispatch();
    const lives = useSelector(state => selectLives(state));
    const intervalTime = useSelector(state => selectIntervalTime(state));
    const changeIntervalTime = () => {
        intervalID.current = setInterval(() => {
            if (lives !== 0) {
                dispatch(decreaseLives(lives));
            };
            if (lives === 0) {
                dispatch(toggleIsGameStarted());
            }
        }, intervalTime);
    };
    return { changeIntervalTime };
};