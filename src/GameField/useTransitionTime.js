import { useSelector } from "react-redux"
import { selectIntervalTime } from "../gameStatsSlice"

export const useTransitionTime = () => {
    const intervalTime = useSelector(state => selectIntervalTime(state));
    return intervalTime / 2000;
};