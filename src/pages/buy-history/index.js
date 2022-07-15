import './index.css';
import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import moment from 'moment/moment.js';

import CategorySidebar from '../../components/category-sidebar';
import SalerInformation from '../../components/saler-information';
import Empty from '../../components/empty';

import { useSelector, useDispatch } from 'react-redux';
import { buyHistory } from '../../features/transaction/transactionSlice';

export default function BuyHistory() {
	const token = useSelector((state) => state.user.auth.token);
	const user = useSelector((state) => state.user.user.data);
	const { response, loading } = useSelector(
		(state) => state.transaction.buy
	);
	const dispatch = useDispatch();
	const location = useLocation();

	const paginationHandler = (current) => {
		dispatch(buyHistory(token));
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		dispatch(buyHistory(token));
	}, [location.pathname]);

	const currency = (value) =>
		new Intl.NumberFormat('en-ID', {
			style: 'currency',
			currency: 'IDR',
		}).format(value);

	return (
		<>
			<Helmet>
				<title>Notifikasi</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='page-daftar-jual md:py-10 py-4'>
				<Helmet>
					<title>Daftar Terjual</title>
					<meta name='description' content='Helmet application' />
				</Helmet>
				<div className='container container-internal'>
					<h1 className='text-xl text-black font-bold mb-6 md:block hidden'>
						Daftar Jual Saya
					</h1>
					<SalerInformation user={user} edit />
					<Row gutter={[32, 24]} className='pt-6'>
						<Col xs={{ span: 24 }} lg={{ span: 8 }}>
							<CategorySidebar />
						</Col>
						<Col xs={{ span: 24 }} lg={{ span: 16 }}>
							<h1 className='text-sm text-black font-medium leading-5 mb-6 md:block hidden'>
								Daftar Produk yang berhasil ditawar
							</h1>
							{!loading && !response && <Empty />}
							{!!response &&
								response.map((i) => (
									<div className=' p-4 shadow-custom rounded-2xl mb-4 flex w-full border-0 cursor-text'>
										<img
											className='flex-shrink-0 w-12 h-12 object-cover rounded-xl mr-4'
											src={i.productResponse.imgUrl[0]}
											alt='product'
										/>
										<div className='notification-content w-full'>
											<div className='flex justify-between items-center mb-1'>
												<span className='text-[10px] text-neutralGray'>
													Penawaran produk
												</span>
												<span className='flex items-center text-[10px] text-neutral-500'>
													{moment(
														i.transactionDate
													).format('DD MMM, kk:mm')}
												</span>
											</div>
											<p className='mb-1 text-black text-sm'>
												{i.productResponse.name}
											</p>
											<p className='mb-1 text-black text-sm'>
												{currency(
													i.productResponse.price
												)}
											</p>
											<p className='mb-1 text-black text-sm'>
												Menawar {currency(i.offerPrice)}{' '}
											</p>
											<a
												href={`https://api.whatsapp.com/send?phone=${i.productResponse.userResponse.phone}`}
												target='_blank'
											>
												Chat Penjual
											</a>
										</div>
									</div>
								))}
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
