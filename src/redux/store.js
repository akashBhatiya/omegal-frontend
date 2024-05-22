import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});
export const persistor = persistStore(store);
export default store;
