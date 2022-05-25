import { configureStore } from '@reduxjs/toolkit';

import gameInformationReducer from './gameInformationSlice';

export const store = configureStore({ 
    reducer: {
        gameInfo: gameInformationReducer,
    },
 });

 export type RootState = ReturnType<typeof store.getState>;

 export type AppDispatch = typeof store.dispatch;
