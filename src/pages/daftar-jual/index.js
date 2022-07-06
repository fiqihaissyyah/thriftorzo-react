import './index.css';
import React, { useEffect } from 'react';
import { Row, Col, Pagination } from 'antd';
import { Helmet } from 'react-helmet';

import Product from '../../components/product';
import CategorySidebar from '../../components/category-sidebar';
import SalerInformation from '../../components/saler-information';
import NewProduct from '../../components/new-product-card';
import Empty from '../../components/empty';
import LoadingProductSold from '../../components/loadingProductSold';

import { useSelector, useDispatch } from 'react-redux';
import { getAllProduct } from '../../features/product/productSlice';

export default function DaftarJual() {
	const user = useSelector((state) => state.user.user.data);
	const { response, error, errorMessage, loading } = useSelector(
		(state) => state.product.getAll
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProduct(0));
		console.log(response);
	}, []);

	const paginationHandler = (current) => {
		console.log(current - 1);
		dispatch(getAllProduct(current - 1));
		window.scrollTo(0, 0);
	};

	return (
		<div className='page-daftar-jual md:py-10 py-4'>
			<Helmet>
				<title>Daftar Jual Saya</title>
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
						<Row gutter={[24, 24]} className='mb-10'>
							{!loading && (
								<Col
									xs={{ span: 12 }}
									md={{ span: 8 }}
									lg={{ span: 8 }}
								>
									<NewProduct />
								</Col>
							)}
							{!loading && response === null && <Empty />}
							{loading && <LoadingProductSold />}
							{!loading &&
								!!response &&
								response.productResponses &&
								response.productResponses.length > 0 &&
								response.productResponses.map((i, index) => (
									<Col
										key={index}
										xs={{ span: 12 }}
										md={{ span: 8 }}
										lg={{ span: 8 }}
									>
										<Product
											img={i.imgUrl[0]}
											title={i.name}
											category={i.category}
											price={i.price}
											link={i.id}
										/>
									</Col>
								))}
						</Row>
						{response !== null && (
							<Pagination
								className='mb-10'
								onChange={paginationHandler}
								defaultCurrent={1}
								current={!!response && response.currentPage + 1}
								total={!!response && response.totalElement}
								pageSize={18}
							/>
						)}
					</Col>
				</Row>
			</div>
		</div>
	);
}
