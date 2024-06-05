import { createSlice } from "@reduxjs/toolkit";

import { fetchAdverts } from "./adverts-operations";
import { pending, rejected } from "helpers/redux-functions";

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        items: [],
        favorites: JSON.parse(localStorage.getItem('favorites'))?.favorites ?? [],
        isLoading: false,
        error: null
    },
    reducers: {
        addToFavorites(state, { payload }) {
            state.favorites = [...state.favorites, ...payload];
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        
        removeFromFavorites(state, { payload }) {
            state.favorites = state.favorites.filter(advert => advert._id !== payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }
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
export const { addToFavorites, removeFromFavorites } = advertsSlice.actions;