import { createAsyncThunk } from "@reduxjs/toolkit";
import * as advertsAPI from 'services/adverts-api';

export const fetchAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const data = await advertsAPI.fetchAll();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
