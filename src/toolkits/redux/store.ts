import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './features/bookSlice';
import { borrowSlice } from './features/borrowSlice';



export const store = configureStore({
  reducer: {
    [bookSlice.reducerPath]: bookSlice.reducer,
    [borrowSlice.reducerPath]: borrowSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookSlice.middleware,  borrowSlice.middleware),
});






export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

