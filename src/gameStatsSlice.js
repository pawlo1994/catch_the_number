import { createSlice } from "@reduxjs/toolkit";

const gameStatsSlice = createSlice({
    name: 'gameStats',
    initialState: {
        isGameStarted: false,
        isGameFieldButtonMissclicked: false,
        x: 10,
        y: 10,
        score: 0,
        lives: 5,
        intervalTime: 1000,
    },
    reducers: {
        toggleIsGameStarted: state => {
            state.isGameStarted = !state.isGameStarted;
        },
        changeCurrentGameState: (state, { payload: lives }) => {
            if (lives !== 0) {
                state.x = Math.ceil(Math.random() * 160) + 10;
                state.y = Math.ceil(Math.random() * 139) + 10;
                state.score = state.score + 5;
                state.isGameFieldButtonMissclicked = false;
            }
        },
        decreaseLives: state => {
            if (state.lives !== 0) {
                state.lives = state.lives - 1;
                state.x = Math.ceil(Math.random() * 160) + 10;
                state.y = Math.ceil(Math.random() * 139) + 10;
                state.isGameFieldButtonMissclicked = true;
            }
        },
        resetGameState: state => {
            state.lives = 5;
            state.score = 0;
            state.x = 10;
            state.y = 10;
            state.intervalTime = 1000;
            state.isGameFieldButtonMissclicked = false;
        },
        setNewIntervalTime: (state, { payload: newIntervalTime }) => {
            state.intervalTime = newIntervalTime;
        },
    }
});

export const {
    toggleIsGameStarted,
    changeCurrentGameState,
    decreaseLives,
    resetGameState,
    setNewIntervalTime,
} = gameStatsSlice.actions;
export const selectIsGameStarted = state => state.gameStats.isGameStarted;
export const selectIsGameFieldButtonMissclicked = state => state.gameStats.isGameFieldButtonMissclicked;
export const selectX = state => state.gameStats.x;
export const selectY = state => state.gameStats.y;
export const selectScore = state => state.gameStats.score;
export const selectLives = state => state.gameStats.lives;
export const selectIntervalTime = state => state.gameStats.intervalTime;
export default gameStatsSlice.reducer;