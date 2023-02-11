import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./app-slice";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const rootPersistConfig = {
    key: "nftverse-root",
    storage
};

const appPersistConfig = {
    key: "nftverse-app",
    storage,
};

const rootReducer = combineReducers({
    app: persistReducer(appPersistConfig, appSlice.reducer),
});

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
});

const persistor = persistStore(store);

export default store;
export { persistor };
