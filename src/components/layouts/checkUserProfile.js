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
		message.error({
			content: 'Lengkapi profile anda terlebih dahulu!',
			className: 'global-alert-error',
			duration: 10,
		});
		message.destroy();
		return <Navigate to='/setting/profile' state={{ from: location }} />;
	}

	return <Outlet {...props} />;
}
