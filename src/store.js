import { configureStore } from "@reduxjs/toolkit";
import gameStatsReducer from "./gameStatsSlice";

const store = configureStore({
    reducer: {
        gameStats: gameStatsReducer,
    }
});

export default store;