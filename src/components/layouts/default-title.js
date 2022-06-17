import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/index';
import Footer from '../footer/index';

export default function DefaultLayoutWithTitle(props) {
	let title = document.title;
	useEffect(() => {
		title = document.title
		console.log(title)
	})
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
