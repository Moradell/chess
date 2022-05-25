import { createSlice } from "@reduxjs/toolkit";

import { Player } from "../models/Player";
import { Colors } from "../constants/colors.enum";

interface GameInformationState {
    whitePlayer: Player;
    blackPlayer: Player;
    currentPlayer: Player | null;
}

const initialState: GameInformationState = {
    whitePlayer: new Player(Colors.WHITE),
    blackPlayer: new Player(Colors.BLACK),
    currentPlayer: null,
}


const gameInformationSlice = createSlice({
    name: 'gameInformation',
    initialState,
    reducers: {
        toggleCurrentPlayer(state, action) {
            console.log(state);
            console.log(action);
        }
    }
});

export const { toggleCurrentPlayer } = gameInformationSlice.actions;

export default gameInformationSlice.reducer;
