// for training purpose with redux-toolkit, not actually used

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchRequest } from '../../app/api';

interface SingleRecipe {
  id: number;
  label: string;
  ingredients: { label: string; quantity: number }[];
  image: string;
  steps: { label: string; description: string }[];
}

interface Recipe {
  id: number;
  label: string;
}

export interface RecipeState {
  currentRecipe: {
    data?: SingleRecipe;
    status: 'done' | 'failed' | 'loading';
  };
  recipesList: {
    data?: Recipe[];
    status: 'done' | 'failed' | 'loading';
  };
}

const initialState: RecipeState = {
  currentRecipe: { status: 'loading', data: undefined },
  recipesList: { status: 'loading', data: undefined },
};

export const fetchRecipesList = createAsyncThunk(
  'recipes/fetchRecipesList',
  async () => {
    const response = await fetchRequest<Recipe[]>(`recipes`);
    return response;
  }
);

export const fetchSingleRecipe = createAsyncThunk(
  'recipes/fetchSingleRecipe',
  async (id: string) => {
    let result;
    try {
      const response = await fetchRequest<SingleRecipe>(`recipe/${id}`);
      result = response;
    } catch (e) {
      throw new Error(e);
    }
    return result;
  }
);

export const recipesSlice = createSlice({
  name: 'recipesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesList.pending, (state) => {
        state.recipesList.status = 'loading';
      })
      .addCase(fetchRecipesList.fulfilled, (state, action) => {
        state.recipesList.status = 'done';
        state.recipesList.data = action.payload;
      })
      .addCase(fetchRecipesList.rejected, (state) => {
        state.recipesList.status = 'failed';
      })
      .addCase(fetchSingleRecipe.pending, (state) => {
        state.currentRecipe.status = 'loading';
      })
      .addCase(fetchSingleRecipe.fulfilled, (state, action) => {
        state.currentRecipe.status = 'done';
        state.currentRecipe.data = action.payload;
      })
      .addCase(fetchSingleRecipe.rejected, (state) => {
        state.currentRecipe.status = 'failed';
      });
  },
});

export const selectCurrentRecipe = (state: RootState) =>
  state.recipes.currentRecipe;
export const selectRecipesList = (state: RootState) =>
  state.recipes.recipesList;

export default recipesSlice.reducer;
