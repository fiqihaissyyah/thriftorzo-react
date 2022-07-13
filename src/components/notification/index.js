import React, { useEffect } from 'react';
import { Skeleton } from 'antd';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment/moment.js'

import './index.css';
import {
	getNotification,
	readNotif,
} from '../../features/notification/notificationSlice';

export default function Notification() {
	const navigate = useNavigate();
	const token = useSelector((state) => state.user.auth.token);
	const { response, loading } = useSelector(
		(state) => state.notification.notif
	);
	const dispatch = useDispatch();
	const location = useLocation();

	const readNotification = async (id, transactionId) => {
		await dispatch(readNotif({ token, id }));
		const current = 0;
		const size = 4;
		dispatch(getNotification({ token, current, size }));
		console.log(response);
		navigate('/penawaran/info-penawaran/' + transactionId);
	};

	useEffect(() => {
		const current = 0;
		const size = 4;
		dispatch(getNotification({ token, current, size }));
		console.log(response);
	}, [location.pathname]);

	const currency = (value) =>
		new Intl.NumberFormat('en-ID', {
			style: 'currency',
			currency: 'IDR',
		}).format(value);

	return (
		<div className='notification p-6 bg-white rounded-2xl w-[376px] mt-4'>
			{loading && Array(3).fill('a').map((i) => (
				<Skeleton key={i} className='mb-3' active />
			))}
			{!loading && response === null && <p>Tidak ada Notifikasi</p>}
			{!loading &&
				!!response &&
				response.notificationResponses &&
				response.notificationResponses.length > 0 &&
				response.notificationResponses.map((i) => (
					<div
						className='notification-item flex'
						onClick={() => readNotification(i.id, i.transactionId)}
					>
						<img
							className='w-12 h-12 object-cover rounded-xl mr-4'
							src={i.productResponse.imgUrl[0]}
							alt='product'
						/>
						<div className='notification-content max-w-[264px] w-full'>
							<div className='flex justify-between items-center mb-1'>
								<span className='text-[10px] text-neutralGray'>
									{i.title}
								</span>
								<span className='flex items-center text-[10px] text-neutral-500'>
									{moment(i.lastUpdated).format('DD MMM, kk:mm')}
									{!i.isRead && (
										<span className='h-2 w-2 rounded-full bg-red-600 inline-block ml-2'></span>
									)}
								</span>
							</div>
							<p className='mb-1 text-black text-sm'>
								{i.productResponse.name}
							</p>
							<p className='mb-1 text-black text-sm'>
								{currency(i.productResponse.price)}

							</p>
							<p className='mb-1 text-black text-sm'>
								Ditawar {currency(i.offerPrice)}
							</p>
						</div>
					</div>
				))}
				{!loading && !!response && (<Link className='block text-center' to={'/notification'}>Lihat Semua Notification</Link>)}
		</div>
	);
}
