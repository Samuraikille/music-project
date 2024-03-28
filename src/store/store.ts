import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { lyricsApi } from "./api/searchApi";
export const store = configureStore({
  reducer: {
    userSlice,
    [lyricsApi.reducerPath]: lyricsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(lyricsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
