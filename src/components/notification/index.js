import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './index.css';
import {
	getNotification,
	readNotif,
} from '../../features/notification/notificationSlice';

export default function Notification() {
	const token = useSelector((state) => state.user.auth.token);
	const user = useSelector((state) => state.user.user.data);
	const { response, loading } = useSelector(
		(state) => state.notification.notif
	);
	const dispatch = useDispatch();
	const userId = user ? user.id : '';
	const location = useLocation();

	const readNotification = (id) => {
		dispatch(readNotif({ token, id }));
	};

	useEffect(() => {
		dispatch(getNotification({ token, userId }));
		console.log(response);
	}, [location.pathname]);

	return (
		<div className='notification p-6 bg-white rounded-2xl w-[376px] mt-4'>
			{!loading && response === null && <p>empty</p>}
			{!loading &&
				!!response &&
				response.length > 0 &&
				response.map((i) => (
					<div
						className='notification-item flex'
						onClick={() => readNotification(i.id)}
					>
						<img
							className='w-12 h-12 object-cover rounded-xl mr-4'
							src={i.productUrl}
							alt='product'
						/>
						<div className='notification-content max-w-[264px] w-full'>
							<div className='flex justify-between items-center mb-1'>
								<span className='text-[10px] text-neutralGray'>
									{i.title}
								</span>
								<span className='flex items-center text-[10px] text-neutral-500'>
									20 Apr, 14:04{' '}
									{!i.isRead && (
										<span className='h-2 w-2 rounded-full bg-red-600 inline-block ml-2'></span>
									)}
								</span>
							</div>
							<p className='mb-1 text-black text-sm'>
								{i.productName}
							</p>
							<p className='mb-1 text-black text-sm'>
								{i.productPrice}
							</p>
							<p className='mb-1 text-black text-sm'>
								Ditawar {i.offerPrice}
							</p>
						</div>
					</div>
				))}
		</div>
	);
}
