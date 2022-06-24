import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { Box, Heart, DollarSign, ChevronRight } from 'react-feather';

import './index.css';

export default function ProductSidebar(props) {
	const location = useLocation();

	return (
		<>
			<div className={`sidebar-product p-4 shadow-custom md:mb-6 mb-4 rounded-2xl ${!props.mobile ? 'md:block hidden' : 'md:hidden block'} z-10 relative bg-white`}>
				<h4 className='text-base text-black mb-2'>Jam Tangan Casio</h4>
				<p className='text-sm text-[#8A8A8A] mb-4'>Aksesoris</p>
				<p className={`text-base text-black ${props.mobile ? 'mb-0' : 'mb-6'}`}>Rp 250.000</p>
				<div className='md:static md:block fixed flex justify-between md:left-auto md:bottom-auto left-4 right-4 bottom-4'>
					<Button
						className='w-full btn-custom md:mb-[14px] md:mr-0 mb-0 mr-4 border border-solid border-[#9f42f3]'
						type='primary'
						htmlType='submit'
					>
						Terbitakan
					</Button>
					<Button
						ghost
						className='w-full btn-custom'
						type='primary'
						htmlType='submit'
					>
						Edit
					</Button>
				</div>
			</div>
		</>
	);
}
