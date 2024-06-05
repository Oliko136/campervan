import { combineReducers } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/adverts-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'favorites',
    storage,
    whitelist: ['favorites']
}

const rootReducer = combineReducers({
    adverts: advertsReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer);