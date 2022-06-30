import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const API_URL = 'https://staging-secondhand-bej3.herokuapp.com/';

export const getProduct = createAsyncThunk(
	'product/getProduct',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${API_URL}product/get-all-products`
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
				`${API_URL}product/get-product/${id}`
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

export const createProduct = createAsyncThunk(
	'product/createProduct',
	async ({ token, id, value }, { rejectWithValue }) => {
		try {
			if (token) {
				const response = await axios.post(
					`${API_URL}product/add-product/${id}`,
					value,
					{ headers: { Authorization: `Bearer ${token}` } }
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

export const uploadImage = createAsyncThunk(
	'product/uploadImage',
	async ({ token, id, values }, { rejectWithValue }) => {
		try {
			if (token) {
				const response = await axios.put(
					`${API_URL}image/upload-products-image`,
					values,
					{ headers: { Authorization: `Bearer ${token}` } }
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
	create: {
		response: null,
		loading: false,
		error: false,
		errorMessage: null,
	},
	upload: {
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
		// =================================================== CREATE PRODUCT =================================================== //
		[createProduct.pending]: (state) => {
			state.create.loading = true;
		},
		[createProduct.fulfilled]: (state, action) => {
			state.create.response = action.payload.data;
			state.create.error = false;
			state.create.errorMessage = null;
			state.create.loading = false;
		},
		[createProduct.rejected]: (state, action) => {
			state.create.error = action.error.message;
			state.create.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.create.loading = false;
		},
		// =================================================== UPLOAD IMAGE PRODUCT =================================================== //
		[uploadImage.pending]: (state) => {
			state.upload.loading = true;
		},
		[uploadImage.fulfilled]: (state, action) => {
			state.upload.response = action.payload.data;
			state.upload.error = false;
			state.upload.errorMessage = null;
			state.upload.loading = false;
		},
		[uploadImage.rejected]: (state, action) => {
			state.upload.error = action.error.message;
			state.upload.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.upload.loading = false;
		},
	},
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
