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

export const getAllProduct = createAsyncThunk(
	'product/getAllProduct',
	async (current, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${API_URL}public/get-all-products?page=${current}&size=18`
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

export const deleteProductImage = createAsyncThunk(
	'product/deleteProductImage',
	async ({ token, url, productId }, { rejectWithValue }) => {
		try {
			if (token) {
				const response = await axios.delete(
					`${API_URL}product/delete-image?url=${url}&productId=${productId}`,
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

export const filterCategory = createAsyncThunk(
	'product/filterCategory',
	async ({ category, current }, { rejectWithValue }) => {
		console.log(category, current);
		try {
			const response = await axios.get(
				`${API_URL}public/filter-category?category=${category}&page=${current}&size=18`
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

export const publishProduct = createAsyncThunk(
	'product/publishProduct',
	async ({ token, values }, { rejectWithValue }) => {
		try {
			if (token) {
				console.log(values);
				let bodyFormData = new FormData();
				bodyFormData.append('productId', values.id);
				bodyFormData.append('name', values.name);
				bodyFormData.append('price', values.price);
				bodyFormData.append('status', values.status);
				bodyFormData.append('publish', values.publish);
				bodyFormData.append('description', values.description);
				bodyFormData.append('category', values.category);

				const response = await axios({
					method: 'put',
					url: `${API_URL}product/update-product`,
					data: bodyFormData,
					headers: {
						'Content-Type':
							'multipart/form-data; boundary=<calculated when request is sent>',
						Accept: '*/*',
						Authorization: `Bearer ${token}`,
					},
				});
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
	getAll: {
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
	deleteImage: {
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
	publish: {
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
		// =================================================== GET All PRODUCT =================================================== //
		[getAllProduct.pending]: (state) => {
			state.getAll.loading = true;
		},
		[getAllProduct.fulfilled]: (state, action) => {
			state.getAll.response = action.payload.data;
			state.getAll.error = false;
			state.getAll.errorMessage = null;
			state.getAll.loading = false;
		},
		[getAllProduct.rejected]: (state, action) => {
			state.getAll.error = action.error.message;
			state.getAll.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.getAll.loading = false;
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
		// =================================================== DELETE PRODUCT IMAGE =================================================== //
		[deleteProductImage.pending]: (state) => {
			state.deleteImage.loading = true;
		},
		[deleteProductImage.fulfilled]: (state, action) => {
			state.deleteImage.response = action.payload.data;
			state.deleteImage.error = false;
			state.deleteImage.errorMessage = null;
			state.deleteImage.loading = false;
		},
		[deleteProductImage.rejected]: (state, action) => {
			state.deleteImage.error = action.error.message;
			state.deleteImage.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.deleteImage.loading = false;
		},
		// =================================================== PUBLISH PRODUCT =================================================== //
		[publishProduct.pending]: (state) => {
			state.publish.loading = true;
		},
		[publishProduct.fulfilled]: (state, action) => {
			state.publish.response = action.payload.data;
			state.publish.error = false;
			state.publish.errorMessage = null;
			state.publish.loading = false;
		},
		[publishProduct.rejected]: (state, action) => {
			state.publish.error = action.error.message;
			state.publish.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.publish.loading = false;
		},
		// =================================================== FILTER CATEGORY =================================================== //
		[filterCategory.pending]: (state) => {
			state.get.loading = true;
		},
		[filterCategory.fulfilled]: (state, action) => {
			state.get.response = action.payload.data;
			state.get.error = false;
			state.get.errorMessage = null;
			state.get.loading = false;
		},
		[filterCategory.rejected]: (state, action) => {
			state.get.response = null;
			state.get.error = action.error.message;
			state.get.errorMessage = action.payload.message
				? action.payload.message
				: action.payload.error;
			state.get.loading = false;
		},
	},
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
