import './index.css';
import React from 'react';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';

import Product from '../../components/product';
import CategorySidebar from '../../components/cateogry-sidebar';
import SalerInformation from '../../components/saler-information';
import NewProduct from '../../components/new-product-card';

export default function DaftarJual() {
	const imgProduct =
		'https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg';

	return (
		<div className='page-daftar-jual md:py-10 py-4'>
			<Helmet>
				<title>Daftar Jual Saya</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='container'>
				<h1 className='text-xl text-black font-bold mb-6 md:block hidden'>Daftar Jual Saya</h1>
				<SalerInformation />
				<Row gutter={[32, 24]} className='pt-6'>
					<Col xs={{ span: 24 }} lg={{ span: 6 }}>
						<CategorySidebar />
					</Col>
					<Col xs={{ span: 24 }} lg={{ span: 18 }}>
						<Row gutter={[24, 24]}>
							<Col
								xs={{ span: 12 }}
								md={{ span: 8 }}
								lg={{ span: 8 }}
							>
								<NewProduct />
							</Col>
							<Col
								xs={{ span: 12 }}
								md={{ span: 8 }}
								lg={{ span: 8 }}
							>
								<Product
									img={imgProduct}
									title='Jam Tangan Casio'
									category='Aksesoris'
									price='250000'
								/>
							</Col>
							<Col
								xs={{ span: 12 }}
								md={{ span: 8 }}
								lg={{ span: 8 }}
							>
								<Product
									img={imgProduct}
									title='Jam Tangan Casio'
									category='Aksesoris'
									price='250000'
								/>
							</Col>
							<Col
								xs={{ span: 12 }}
								md={{ span: 8 }}
								lg={{ span: 8 }}
							>
								<Product
									img={imgProduct}
									title='Jam Tangan Casio'
									category='Aksesoris'
									price='250000'
								/>
							</Col>
							<Col
								xs={{ span: 12 }}
								md={{ span: 8 }}
								lg={{ span: 8 }}
							>
								<Product
									img={imgProduct}
									title='Jam Tangan Casio'
									category='Aksesoris'
									price='250000'
								/>
							</Col>
							<Col
								xs={{ span: 12 }}
								md={{ span: 8 }}
								lg={{ span: 8 }}
							>
								<Product
									img={imgProduct}
									title='Jam Tangan Casio'
									category='Aksesoris'
									price='250000'
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
}
