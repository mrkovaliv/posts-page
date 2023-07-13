import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPostData } from '../../types/post';

const INITIAL_STATE: IPostData[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: INITIAL_STATE,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<IPostData>) => {
      const isExist = state.some(post => post.id === action.payload.id);

      if (isExist) {
        return state.filter(post => post.id !== action.payload.id);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
