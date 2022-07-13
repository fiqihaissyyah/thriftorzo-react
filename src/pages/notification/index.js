import './index.css';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'antd';
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

	const paginationHandler = (current) => {
		const size = 8;
		current = current - 1;
		dispatch(getNotification({ token, current, size }));
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		const current = 0;
		const size = 8;
		dispatch(getNotification({ token, current, size }));
		console.log(response);
	}, [location.pathname]);

	return (
		<>
			<Helmet>
				<title>Notifikasi</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='notifiation-page pt-4'>
				<div className='container'>
					{!loading && response === null && <p>empty</p>}
					{!loading &&
						!!response &&
						response.notificationResponses &&
						response.notificationResponses.length > 0 &&
						response.notificationResponses.map((i) => (
							<div
								className='notification-item flex justify-between'
								onClick={() =>
									readNotification(i.id, i.transactionId)
								}
							>
								<img
									className='w-12 h-12 object-cover rounded-xl flex-shrink-0'
									src={i.productResponse.imgUrl}
									alt='product'
								/>
								<div className='notification-content w-full ml-4'>
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
										{i.productResponse.name}
									</p>
									<p className='mb-1 text-black text-sm'>
										{i.productResponse.price}
									</p>
									<p className='mb-1 text-black text-sm'>
										Ditawar {i.offerPrice}
									</p>
								</div>
							</div>
						))}
					{!loading && !!response && response.totalPage > 1 && (
						<Pagination
							className='mb-10 mt-10'
							onChange={paginationHandler}
							defaultCurrent={1}
							current={!!response && response.currentPage + 1}
							total={!!response && response.totalElement}
							pageSize={8}
						/>
					)}
				</div>
			</div>
		</>
	);
}
