import { createSelector } from "reselect";

import { IPostData } from "../../types/post";
import { RootState } from "../store";

const getState = (state: RootState) => state;

export const selectFavorites = createSelector(
  getState,
  (state) => state.favorites,
);
export const selectFavoritesCount = createSelector(
  getState,
  (state) => state.favorites.length,
);

export const selectIsExistPost = (post: IPostData) =>
  createSelector(selectFavorites, (favorites) =>
    favorites.some((p) => p.id === post.id),
  );
