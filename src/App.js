import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from './components/layouts/auth';
import DefaultLayout from './components/layouts/default';
import DefaultLayoutWithTitle from './components/layouts/default-title';
import DefaultLayoutWithNavigation from './components/layouts/default-navigation';

import Home from './pages/home/index';
import Login from './pages/login/index';
import Register from './pages/register/index';
import Profile from './pages/profile/index';
import ProductForm from './pages/productForm/index';
import Notification from './pages/notification';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
				</Route>
				<Route element={<DefaultLayoutWithTitle />}>
					<Route
						exact
						path='/notification'
						element={<Notification />}
					/>
				</Route>
				<Route element={<DefaultLayoutWithNavigation />}>
					<Route exact path='/profile' element={<Profile />} />
					<Route
						exact
						path='/product/create'
						element={<ProductForm />}
					/>
					<Route
						exact
						path='/product/update'
						element={<ProductForm />}
					/>
				</Route>
				<Route element={<DefaultLayout />}>
					<Route exact path='/' element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
