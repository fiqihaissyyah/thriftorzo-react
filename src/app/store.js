import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import productSlice from '../features/product/productSlice';
import transactionSlice from '../features/transaction/transactionSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		product: productSlice,
		transaction: transactionSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
