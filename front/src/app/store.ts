import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import recipesSlice from '../features/recipes/recipesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
