import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

const store = configureStore({
  reducer: rootReducer,
  // composeEnhancers()
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
