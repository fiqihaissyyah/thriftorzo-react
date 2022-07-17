import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Select, Alert, Upload, message } from 'antd';
import { Helmet } from 'react-helmet';
import {
	Edit3,
	Settings,
	LogOut,
} from 'react-feather';

import { useDispatch, useSelector } from 'react-redux';
import { getUser, reset } from '../../features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Setting() {
	const profileUser = useSelector((state) => state.user.user.data);
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleLogout = async () => {
		await localStorage.removeItem('token');
		await localStorage.removeItem('user');
		await dispatch(reset());
		navigate('/');
	};

	useEffect(() => {
		dispatch(getUser());
	}, []);

	return (
		<div className='container'>
			<Helmet>
				<title>Akun Saya</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='update-profile-wrapper max-w-[568px] md:pt-10 pt-6 w-full mx-auto'>
				<div className='profile-avatar text-center w-full mb-8'>
					<img className='w-24 h-24 rounded-2xl object-cover' src={!!profileUser && profileUser.imgUrl} />
				</div>
				<div className='seeting-nav'>
					<Link to={'/profile'} className='flex items-center mb-4'><Edit3 size={24} className='text-purplePrimary' /><span className='text-black ml-4 inline-block'>Ubah Akun</span></Link>
					<Link to={'/profile'} className='flex items-center mb-4'><Settings size={24} className='text-purplePrimary' /><span className='text-black ml-4 inline-block'>Pengaturan Akun</span></Link>
					<div onClick={handleLogout} className='flex items-center mb-4 cursor-pointer'><LogOut size={24} className='text-purplePrimary' /><span className='text-black ml-4 inline-block'>Keluar</span></div>
				</div>
				<p className='text-xs text-[#8A8A8A] mt-4 text-center'>Version 1.0.0</p>
			</div>
		</div>
	);
}
