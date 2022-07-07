import React, { useState, useEffect } from 'react';
import { Button, Modal, Avatar, Form, InputNumber, message } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { sendOffer } from '../../features/transaction/transactionSlice';

import { X } from 'react-feather';

import './index.css';

export default function ModalOffer(props) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [form] = Form.useForm();

	const token = useSelector((state) => state.user.auth.token);
	const user = useSelector((state) => state.user.user.data);
	const userId = user ? user.id : '';

	const dispatch = useDispatch();
	const { response, error, errorMessage, loading } = useSelector(
		(state) => state.transaction.offer
	);

	const onFinish = async (values) => {
		values = {...values, status: 1, productId: props.id};
		await dispatch(sendOffer({token, userId, values}));
		setIsModalVisible(false);
		message.success('Berhasil Mengirimkan Tawaran!');
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	useEffect(() => {
		if (props.events) {
			props.events.click = showModal;
		}
	}, [props.events]);

	const currency = (value) =>
		new Intl.NumberFormat('en-ID', {
			style: 'currency',
			currency: 'IDR',
		}).format(value);

	return (
		<>
			<Modal
				closeIcon={<X size={24} />}
				bodyStyle={{ padding: '56px 32px 24px' }}
				width={360}
				footer={null}
				visible={isModalVisible}
				onCancel={handleCancel}
			>
				<p className='text-sm text-black font-medium mb-2'>
					Masukkan Harga Tawarmu
				</p>
				<p className='text-sm text-[#8A8A8A] mb-4'>
					Harga tawaranmu akan diketahui penjual, jika penjual cocok
					kamu akan segera dihubungi penjual.
				</p>
				<div className='product-match p-4 md:bg-[#EEEEEE] md:shadow-none shadow-custom bg-white rounded-2xl mb-6'>
					<div className='product flex'>
						<Avatar
							size={48}
							className='rounded-xl mr-4 flex-shrink-0'
							src={props.image}
						/>
						<div className='product-info w-full flex flex-col justify-center'>
							<p className='text-sm text-black font-medium mb-1'>
								{props.name}
							</p>
							<p className='text-sm text-black mb-1'>
								{currency(props.price)}
							</p>
						</div>
					</div>
				</div>
				<Form
					layout='vertical'
					form={form}
					name='control-hooks'
					onFinish={onFinish}
				>
					<Form.Item
						className='mb-4'
						name='offerPrice'
						label='Harga Tawar'
						required={false}
						rules={[
							{
								required: true,
								message: 'Harga Tawar tidak boleh kosong!',
							},
							{
								type: 'number',
								message: 'Harga Tawar harus angka!',
							},
						]}
					>
						<InputNumber placeholder='Rp 0,00' />
					</Form.Item>
					<Form.Item className='mb-0'>
						<Button
							loading={loading}
							type='primary'
							htmlType='submit'
							className='btn-custom w-full'
						>
							Kirim
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}
