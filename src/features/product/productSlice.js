import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const API_URL = 'https://staging-secondhand-bej3.herokuapp.com/';

export const getProduct = createAsyncThunk(
	'product/getProduct',
	async (current, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${API_URL}public/get-all-products-ready?page=${current}&size=18`
			);
			return response;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return rejectWithValue(err.response.data);
		}
	}
);

export const getProductDetail = createAsyncThunk(
	'product/getProductDetail',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${API_URL}public/get-product/${id}`
			);
			return response;
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return rejectWithValue(err.response.data);
		}
	}
);

export const deleteProduct = createAsyncThunk(
	'product/deleteProduct',
	async ({ token, id }, { rejectWithValue }) => {
		try {
			if (token) {
				const response = await axios.delete(
					`${API_URL}product/delete-product/${id}`,
					{ headers: { Authorization: `Bearer ${token}`} }
				);
				return response;
			} else {
				const data = [
					{
						error: 'Token Not Found',
						message: 'Token Not Found',
					},
				];
				return rejectWithValue(...data);
			}
		} catch (err) {
			if (!err.response) {
				throw err;
			}
			return rejectWithValue(err.response.data);
		}
	}
);

const initialState = {
	get: {
		response: null,
		loading: false,
		error: false,
		errorMessage: null,
	},
	detail: {
		response: null,
		loading: false,
		error: false,
		errorMessage: null,
	},
	delete: {
		response: null,
		loading: false,
		error: false,
		errorMessage: null,
	},
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: {
		// =================================================== GET PRODUCT =================================================== //
		[getProduct.pending]: (state) => {
			state.get.loading = true;
		},
		[getProduct.fulfilled]: (state, action) => {
			state.get.response = action.payload.data;
			state.get.error = false;
			state.get.errorMessage = null;
			state.get.loading = false;
		},
		[getProduct.rejected]: (state, action) => {
			state.get.error = action.error.message;
			state.get.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.get.loading = false;
		},
		// =================================================== GET PRODUCT DETAIL =================================================== //
		[getProductDetail.pending]: (state) => {
			state.detail.loading = true;
		},
		[getProductDetail.fulfilled]: (state, action) => {
			state.detail.response = action.payload.data;
			state.detail.error = false;
			state.detail.errorMessage = null;
			state.detail.loading = false;
		},
		[getProductDetail.rejected]: (state, action) => {
			state.get.error = action.error.message;
			state.get.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.get.loading = false;
		},
		// =================================================== DELETE PRODUCT =================================================== //
		[deleteProduct.pending]: (state) => {
			state.delete.loading = true;
		},
		[deleteProduct.fulfilled]: (state, action) => {
			state.delete.response = action.payload.data;
			state.delete.error = false;
			state.delete.errorMessage = null;
			state.delete.loading = false;
		},
		[deleteProduct.rejected]: (state, action) => {
			state.delete.error = action.error.message;
			state.delete.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.delete.loading = false;
		},
	},
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
