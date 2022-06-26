import './index.css';
import React from 'react';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';

import CategorySidebar from '../../components/cateogry-sidebar';
import SalerInformation from '../../components/saler-information';
import Empty from '../../components/empty';

export default function Wishlist() {
	const imgProduct =
		'https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg';

	return (
		<div className='page-daftar-jual md:py-10 py-4'>
			<Helmet>
				<title>Daftar Diminati</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='container container-internal'>
				<h1 className='text-xl text-black font-bold mb-6 md:block hidden'>
					Daftar Jual Saya
				</h1>
				<SalerInformation edit />
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
