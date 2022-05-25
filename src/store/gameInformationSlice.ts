import { createSlice } from "@reduxjs/toolkit";

import { Colors } from "../constants/colors.enum";

interface GameInformationState {
    currentPlayer: Colors | null;
}

const initialState: GameInformationState = {
    currentPlayer: Colors.WHITE,
}

const gameInformationSlice = createSlice({
    name: 'gameInformation',
    initialState,
    reducers: {
        toggleCurrentPlayer(state) {
            state.currentPlayer = state.currentPlayer === Colors.WHITE ? Colors.BLACK : Colors.WHITE;
        }
    }
});

export const { toggleCurrentPlayer } = gameInformationSlice.actions;

export default gameInformationSlice.reducer;
