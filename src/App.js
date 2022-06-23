import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from './components/layouts/auth';
import DefaultLayout from './components/layouts/default';
import DefaultLayoutWithTitle from './components/layouts/default-title';
import DefaultLayoutWithNavigation from './components/layouts/default-navigation';
import DefaultLayoutBlank from './components/layouts/default-blank';
import IsAuth from './components/layouts/isAuth';

import Home from './pages/home/index';
import Login from './pages/login/index';
import Register from './pages/register/index';
import Profile from './pages/profile/index';
import ProductForm from './pages/productForm/index';
import Notification from './pages/notification';
import DaftarJual from './pages/daftarJual';
import Wishlist from './pages/wishlist';
import Terjual from './pages/terjual';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
				</Route>
				<Route element={<IsAuth />}>
					<Route element={<DefaultLayoutWithTitle />}>
						<Route
							exact
							path='/notification'
							element={<Notification />}
						/>
					</Route>
					<Route element={<DefaultLayoutWithNavigation />}>
						<Route
							exact
							path='/profile'
							title='Page Profile'
							element={<Profile />}
						/>
					</Route>
					<Route element={<DefaultLayoutBlank />}>
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
				</Route>
				<Route element={<DefaultLayout />}>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/daftar-jual' element={<DaftarJual />} />
					<Route
						exact
						path='/daftar-jual/diminati'
						element={<Wishlist />}
					/>
					<Route
						exact
						path='/daftar-jual/terjual'
						element={<Terjual />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
