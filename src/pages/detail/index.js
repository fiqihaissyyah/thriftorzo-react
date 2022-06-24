import { Row, Col } from 'antd';
import React from 'react';
import SliderProduct from '../../components/slider-product';
import ProductSidebar from '../../components/product-sidebar';
import SalerInformation from '../../components/saler-information';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

import './index.css';

export default function Detail() {
	const navigate = useNavigate();
	const navigateBack = () => {
		navigate(-1);
	};

	return (
		<div className='container container-internal md:py-10 pt-0 pb-6'>
			<div className='product-navigation w-6 h-6 rounded-full bg-white absolute z-10 top-[44px] left-4 md:hidden block cursor-pointer' onClick={navigateBack}>
				<ArrowLeft size={24} />
			</div>
			<Row gutter={[32, 16]}>
				<Col xs={{ span: 24 }} md={{ span: 16 }}>
					<SliderProduct />
					<ProductSidebar mobile/>
					<SalerInformation mobile edit={false} />
					<div className='shadow-custom md:mt-6 mt-4 rounded-2xl'>
						<div className='p-4'>
							<h4 className='text-sm text-black mb-4'>Deskripsi</h4>
							<p className='text-neutralGray text-sm'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</p>
							<p className='text-neutralGray mb-0 text-sm'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</Col>
				<Col className='md:block hidden' xs={{ span: 24 }} md={{ span: 8 }}>
					<ProductSidebar/>
					<SalerInformation edit={false} />
				</Col>
			</Row>
		</div>
	);
}
