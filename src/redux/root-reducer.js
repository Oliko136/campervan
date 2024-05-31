import { combineReducers } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/adverts-slice";

const rootReducer = combineReducers({
    adverts: advertsReducer
})

export default rootReducer;