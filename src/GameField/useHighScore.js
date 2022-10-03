export const useHighScore = () => {
    const highScore = localStorage.getItem('highScore') || 0;
    return highScore;
};