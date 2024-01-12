import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productAPIClient from '../../services/product-api-client';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {
        // Logic for synchrnous actions
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }

});

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const products = await productAPIClient.getAllProducts();
            return products;
        } catch(error) {
            return rejectWithValue(error.response?.data || 'An error occurred');
        }
    }
);

export default productSlice.reducer;    // Reducer