import React, { useEffect } from 'react';
import { Col, Row, Pagination } from 'antd';

import Category from '../../components/category';
import Product from '../../components/product';
import SliderHome from '../../components/slider-home';
import SellButton from '../../components/sell-button';
import Empty from '../../components/empty';
import LoadingProduct from '../../components/loadingProduct';

import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../features/product/productSlice';

import './index.css';

export default function Home() {
	const { response, error, errorMessage, loading } = useSelector(
		(state) => state.product.get
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(0));
		console.log(response);
	}, []);

	const paginationHandler = (current) => {
		console.log(current - 1);
		dispatch(getProduct(current - 1));
		window.scrollTo(0, 0);
	};

	return (
		<>
			<Helmet>
				<title>SecondHand - Homepage</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<SliderHome />
			<div className='product-section'>
				<div className='container'>
					<h2 className='text-base font-bold mt-10 mb-4'>
						Telusuri Kategori!
					</h2>
					<div className='flex mb-10 w-full md:overflow-auto overflow-x-scroll category-warpper'>
						<Category category='Semua' active />
						<Category category='Hobi' />
						<Category category='Kendaraan' />
						<Category category='Baju' />
						<Category category='Elektronik' />
						<Category category='Kesehatan' />
					</div>
					<Row gutter={[16, 16]} className='mb-10'>
						{response === null && <Empty />}
						{loading && <LoadingProduct />}
						{!loading &&
							!!response &&
							response.productResponses &&
							response.productResponses.length > 0 &&
							response.productResponses.map((i, index) => (
								<Col
									key={index}
									xs={{ span: 12 }}
									md={{ span: 6 }}
									lg={{ span: 4 }}
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
				</div>
			</div>
			<SellButton />
		</>
	);
}
