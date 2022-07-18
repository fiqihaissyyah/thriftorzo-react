import React from 'react';
import { message } from 'antd';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function checkUserProfile(props) {
	const location = useLocation();
	const profileUser = useSelector((state) => state.user.user.data);

	if (
		profileUser.address == null &&
		profileUser.phone == null &&
		profileUser.phone == null &&
		profileUser.cityName == null &&
		profileUser.imgUrl == null
	) {
		message.error('Lengkapi profile anda terlebih dahulu!');
		message.destroy();
		return <Navigate to='/setting/profile' state={{ from: location }} />;
	}

	return <Outlet {...props} />;
}
