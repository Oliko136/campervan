import { createAsyncThunk } from "@reduxjs/toolkit";
import * as advertsAPI from 'services/adverts-api';

export const fetchAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async (page, { rejectWithValue }) => {
        try {
            const data = await advertsAPI.fetchAll(page);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
