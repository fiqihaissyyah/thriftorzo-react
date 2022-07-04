import './index.css';
import React from 'react';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';

import Product from '../../components/product';
import CategorySidebar from '../../components/category-sidebar';
import SalerInformation from '../../components/saler-information';
import NewProduct from '../../components/new-product-card';
import Empty from '../../components/empty';
import { useSelector } from 'react-redux';

export default function Terjual() {
	const user = useSelector((state) => state.user.user.data);

	return (
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
						<Row gutter={[24, 24]}>
							<Empty />
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
}
