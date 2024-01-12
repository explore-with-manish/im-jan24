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
            // INSERT
            .addCase(insertProduct.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(insertProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(insertProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // UPDATE
            .addCase(updateProduct.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { id, ...updatedProduct } = action.payload;
                const existingProduct = state.items.find(product => product.id === id);
                if (existingProduct) {
                    Object.assign(existingProduct, updatedProduct);
                }
                state.error = null;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // DELETE
            .addCase(deleteProduct.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const {id} = action.payload;
                const existingProduct = state.items.find(product => product.id === id);
                if(existingProduct) {
                    state.items = state.items.filter(product => product.id !== id);
                }
                state.error = null;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
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
        } catch (error) {
            return rejectWithValue(error.response?.data || 'An error occurred');
        }
    }
);

export const insertProduct = createAsyncThunk(
    'products/insertProduct',
    async (product, { rejectWithValue }) => {
        try {
            const response = await productAPIClient.insertProduct(product);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error inserting product');
        }
    }
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product, { rejectWithValue }) => {
        try {
            const response = await productAPIClient.updateProduct(product);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error updating product');
        }
    }
);

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId, { rejectWithValue }) => {
        try {
            await productAPIClient.deleteProduct(productId);
            return { id: productId };
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error deleting product');
        }
    }
);

export default productSlice.reducer;    // Reducer