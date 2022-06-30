import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { useSelector } from 'react-redux';

import ModalOffer from '../modal-offer';

import './index.css';

const ProductStatus = (props) => {
	return (
		<>
			{props.status !== 1 && (
				<Button
					className='w-full btn-custom md:mb-[14px] md:mr-0 mb-0 mr-4 border border-solid border-[#9f42f3]'
					type='primary'
					htmlType='submit'
				>
					Terbitakan
				</Button>
			)}
			{props.status === 1 && (
				<Button
					className='w-full btn-custom md:mb-[14px] md:mr-0 mb-0 mr-4 border border-solid border-red-500 bg-red-500 hover:bg-red-400 hover:border-red-400'
					type='primary'
					htmlType='submit'
				>
					Hapus
				</Button>
			)}
		</>
	);
};

export default function ProductSidebar(props) {
	const profileUser = useSelector((state) => state.user.user.data);
	const location = useLocation();
	const offersEvents = { click: () => {} };

	const currency = (value) =>
		new Intl.NumberFormat('en-ID', {
			style: 'currency',
			currency: 'IDR',
		}).format(value);

	return (
		<>
			<div
				className={`sidebar-product p-4 shadow-custom md:mb-6 mb-4 rounded-2xl ${
					!props.mobile ? 'md:block hidden' : 'md:hidden block'
				} z-10 relative bg-white`}
			>
				<h4 className='text-base text-black mb-2'>{props.name}</h4>
				<p className='text-sm text-[#8A8A8A] mb-4'>{props.category}</p>
				<p
					className={`text-base text-black ${
						props.mobile ? 'mb-0' : 'mb-6'
					}`}
				>
					{currency(props.price)}
				</p>
				<div className='md:static md:block fixed flex justify-between md:left-auto md:bottom-auto left-4 right-4 bottom-4'>
					{!!profileUser && profileUser.id === props.userId && (
						<>
							<ProductStatus status={props.status} />
							<Button
								ghost
								className='w-full btn-custom'
								type='primary'
								htmlType='submit'
							>
								Edit
							</Button>
						</>
					)}
					{!!profileUser && profileUser.id !== props.userId && (
						<Button
							onClick={() => offersEvents.click()}
							className='w-full btn-custom border border-solid border-[#9f42f3]'
							type='primary'
							htmlType='submit'
						>
							Saya tertarik dan ingin nego
						</Button>
					)}
				</div>
			</div>
			<ModalOffer events={offersEvents} />
		</>
	);
}
