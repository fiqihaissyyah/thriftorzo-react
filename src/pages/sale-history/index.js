import './index.css';
import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import CategorySidebar from '../../components/category-sidebar';
import SalerInformation from '../../components/saler-information';
import Empty from '../../components/empty';

import { useSelector, useDispatch } from 'react-redux';
import { saleHistory } from '../../features/transaction/transactionSlice';

export default function SaleHistory() {
	const token = useSelector((state) => state.user.auth.token);
	const user = useSelector((state) => state.user.user.data);
	const { response, loading } = useSelector(
		(state) => state.transaction.sale
	);
	const dispatch = useDispatch();
	const location = useLocation();

	const paginationHandler = (current) => {
		dispatch(saleHistory(token));
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		dispatch(saleHistory(token));
	}, [location.pathname]);

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
							{!loading && !response && <Empty />}
							{!!response &&
							response.map((i) => (
								<>
									<p>ID: {i.transactionId}</p>
									<p>PRODUCT: {i.productResponse.name}</p>
									<p>USER: {i.buyerResponse.name}</p>
									<p>PRICE: {i.productResponse.price}</p>
									<p>OFFER PRICE: {i.offerPrice}</p>
									<p>STATUS: {i.status}</p>
									<Link
										to={`/penawaran/info-penawaran/${i.transactionId}`}
									>
										Detail
									</Link>
									<hr />
								</>
							))}
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
