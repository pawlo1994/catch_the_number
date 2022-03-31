export const useChangeIntervalTime = (intervalID, setX, setY, setLives, lives, isGameStarted, currentIntervalTime) => {
    const changeIntervalTime = () => {
        intervalID.current = setInterval(() => {
            setX(Math.ceil(Math.random() * 200));
            setY(Math.ceil(Math.random() * 100));
            setLives(lives => lives > 0 ? lives - 1 : lives);
        }, currentIntervalTime);
        if (isGameStarted && lives === 0) {
            clearInterval(intervalID.current);
        }
    };
    return { changeIntervalTime };
};