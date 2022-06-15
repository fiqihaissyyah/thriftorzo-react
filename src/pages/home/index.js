import React from 'react';
import { Col, Row } from 'antd';

import Category from '../../components/cateogry';
import Product from '../../components/product';
import SliderHome from '../../components/slider-home';

import './index.css';

export default function Home() {
	const imgProduct =
		'https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg';

	return (
		<div>
			<SliderHome />
			<div className='container'>
				<h2 className='text-base font-bold mt-10 mb-4'>
					Telusuri Kategori!
				</h2>
				<div className='flex mb-10 w-full'>
					<Category category='Semua' active />
					<Category category='Hobi' />
					<Category category='Kendaraan' />
					<Category category='Baju' />
					<Category category='Elektronik' />
					<Category category='Kesehatan' />
				</div>
				<Row gutter={16} className='mb-10'>
					<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
						<Product
							img={imgProduct}
							title='Jam Tangan Casio'
							category='Aksesoris'
							price='250000'
						/>
					</Col>
					<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
						<Product
							img={imgProduct}
							title='Jam Tangan Casio'
							category='Aksesoris'
							price='250000'
						/>
					</Col>
					<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
						<Product
							img={imgProduct}
							title='Jam Tangan Casio'
							category='Aksesoris'
							price='250000'
						/>
					</Col>
					<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
						<Product
							img={imgProduct}
							title='Jam Tangan Casio'
							category='Aksesoris'
							price='250000'
						/>
					</Col>
					<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
						<Product
							img={imgProduct}
							title='Jam Tangan Casio'
							category='Aksesoris'
							price='250000'
						/>
					</Col>
					<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
						<Product
							img={imgProduct}
							title='Jam Tangan Casio'
							category='Aksesoris'
							price='250000'
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
}
