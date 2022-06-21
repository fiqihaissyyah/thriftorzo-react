import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/index';
import Footer from '../footer/index';

import { useLocation } from 'react-router-dom';

export default function DefaultLayoutWithTitle(props) {
	const location = useLocation();
	const { state } = useLocation();
	const [title, setTitle] = useState('');

	useEffect(() => {
		console.log(state);
		setTitle(location.pathname);
	}, [location.pathname]);

	return (
		<>
			<div className='main-content'>
				<Header title={title} />
				<Outlet {...props} />
				<Footer />
			</div>
		</>
	);
}
