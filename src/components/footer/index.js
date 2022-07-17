import React from 'react';
import { Col, Row } from 'antd';

import './index.css';

export default function Footer() {
	return (
		<div className='footer bg-[#7126B5] py-9'>
			<div className='container'>
				<Row gutter={24}>
					<Col
						xs={{ span: 24 }}
						md={{ span: 12 }}
						className='flex md:justify-start justify-center'
					>
						<span className='text-lg font-bold leading-5 text-white md:mb-0 mb-6'>
							Second <br />
							Hand.
						</span>
					</Col>
					<Col
						xs={{ span: 24 }}
						md={{ span: 12 }}
						className='flex md:justify-end items-center justify-center'
					>
						<span className='md:text-sm text-xs text-white'>
							Copyright ©2022 SecondHand. All rights reserved.
						</span>
					</Col>
				</Row>
			</div>
		</div>
	);
}
