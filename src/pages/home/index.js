import React, { useEffect } from 'react';
import { Col, Row, Skeleton } from 'antd';

import Category from '../../components/cateogry';
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
		dispatch(getProduct());
		console.log(response);
	}, []);

	const imgProduct =
		'https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg';

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
						{!!response && response.length === 0 && <Empty />}
						{loading && <LoadingProduct />}
						{!loading &&
							!!response &&
							response.length > 0 &&
							response.map((i, index) => (
								<Col
									key={index}
									xs={{ span: 12 }}
									md={{ span: 6 }}
									lg={{ span: 4 }}
								>
									<Product
										img={imgProduct}
										title={i.name}
										category={i.category}
										price={i.price}
										link={i.id}
									/>
								</Col>
							))}
					</Row>
				</div>
			</div>
			<SellButton />
		</>
	);
}
