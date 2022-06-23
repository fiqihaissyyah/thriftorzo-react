import { Row, Col } from 'antd';
import React from 'react';
import SliderProduct from '../../components/slider-product';

import './index.css';

export default function Detail() {
	return (
		<div className='container'>
			<Row>
				<Col xs={{ span: 24 }} lg={{ span: 16 }}>
					<SliderProduct />
					<div className='shadow-custom my-6 rounded-2xl'>
						<div className='p-4'>
						<h4>Deskripsi</h4>
						<p className='text-neutralGray'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						<p className='text-neutralGray'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						</div>
					</div>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
}
