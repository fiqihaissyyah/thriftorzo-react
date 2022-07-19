import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export default function IsGuest(props) {
	const location = useLocation();
	const TOKEN = localStorage.getItem('token');

	if (TOKEN) {
		return <Navigate to='/' state={{ from: location }} />;
	}

	return <Outlet {...props} />;
}
