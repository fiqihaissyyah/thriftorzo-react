import React from 'react';
import { Button, Popconfirm, message } from 'antd';

import ModalOffer from '../modal-offer';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
	deleteProduct,
	publishProduct,
	getProductDetail,
} from '../../features/product/productSlice';

import './index.css';

const ProductStatus = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const token = useSelector((state) => state.user.auth.token);
	const { loading } = useSelector((state) => state.product.delete);
	const { response } = useSelector((state) => state.product.detail);
	const publishLoading = useSelector(
		(state) => state.product.publish.loading
	);

	const deleteHandler = async (id) => {
		console.log(id);
		await dispatch(deleteProduct({ token, id }));
		message.success('Berhasil Menambah Produk!');
		navigate('/daftar-jual');
	};

	const publishHandler = async () => {
		const values = { ...response, publish: 1 };
		console.log(values);
		await dispatch(publishProduct({ token, values }));
		await dispatch(getProductDetail(values.id));
		message.success('Berhasil Menerbitkan Produk!');
	};

	return (
		<>
			{props.publish !== 1 && (
				<Button
					loading={publishLoading}
					onClick={publishHandler}
					className='w-full btn-custom md:mb-[14px] md:mr-0 mb-0 mr-4 border border-solid border-[#9f42f3]'
					type='primary'
					htmlType='submit'
				>
					Terbitakan
				</Button>
			)}
			{props.publish === 1 && (
				<Popconfirm
					loading={loading}
					title='Apakah anda yakin menghapus produk ini?'
					onConfirm={() => deleteHandler(props.id)}
					okText='Iya'
					cancelText='Tidak'
				>
					<Button
						loading={loading}
						className='w-full btn-custom md:mb-[14px] md:mr-0 mb-0 mr-4 border border-solid border-red-500 bg-red-500 hover:bg-red-400 active:bg-red-400 hover:border-red-400 active:border-red-400'
						type='primary'
						htmlType='submit'
					>
						Hapus
					</Button>
				</Popconfirm>
			)}
		</>
	);
};

export default function ProductSidebar(props) {
	const profileUser = useSelector((state) => state.user.user.data);
	const offersEvents = { click: () => {} };
	const navigate = useNavigate();

	const handleEdit = () => {
		navigate('/update/product/' + props.id);
	};

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
						props.mobile || !profileUser ? 'mb-0' : 'mb-6'
					}`}
				>
					{currency(props.price)}
				</p>
				<div className='md:static md:block fixed flex justify-between md:left-auto md:bottom-auto left-4 right-4 bottom-4'>
					{!!profileUser && profileUser.id === props.userId && (
						<>
							<ProductStatus
								id={props.id}
								publish={props.publish}
							/>
							<Button
								onClick={handleEdit}
								ghost
								className='w-full btn-custom'
								type='primary'
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
