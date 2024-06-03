import { createSlice } from "@reduxjs/toolkit";

import { fetchAdverts } from "./adverts-operations";
import { pending, rejected } from "helpers/redux-functions";

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAdverts.pending, pending)
            .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = [...state.items, ...payload];
            })
            .addCase(fetchAdverts.rejected, rejected)
    }
});

export const advertsReducer = advertsSlice.reducer;