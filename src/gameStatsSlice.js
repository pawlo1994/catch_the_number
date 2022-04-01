import { createSlice } from "@reduxjs/toolkit";

const gameStatsSlice = createSlice({
    name: 'gameStats',
    initialState: {
        isGameStarted: false,
        x: 10,
        y: 10,
        score: 0,
        lives: 5,
        currentIntervalTime: 1000,
    },
    reducers: {
        toggleIsGameStarted: state => {
            state.isGameStarted = !state.isGameStarted;
        },
        setNewNumberButtonPosition: state => {
            state.x = Math.ceil(Math.random() * 200) + 10;
            state.y = Math.ceil(Math.random() * 100) + 10;
        },
        increaseScore: state => {
            state.score = state.score + 5;
        },
        decreaseLives: state => {
            if (state.lives !== 0) {
                state.lives = state.lives - 1;
            }
        },
        resetScoreAndLives: state => {
            state.lives = 5;
            state.score = 0;
        },
    }
});

export const {
    toggleIsGameStarted,
    setNewNumberButtonPosition,
    increaseScore,
    decreaseLives,
    resetScoreAndLives,
} = gameStatsSlice.actions;
export const selectIsGameStarted = state => state.gameStats.isGameStarted;
export const selectX = state => state.gameStats.x;
export const selectY = state => state.gameStats.y;
export const selectScore = state => state.gameStats.score;
export const selectLives = state => state.gameStats.lives;
export default gameStatsSlice.reducer;