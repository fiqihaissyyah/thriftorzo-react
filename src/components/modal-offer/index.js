import React, { useState, useEffect } from 'react';
import { Button, Modal, Avatar, Form, InputNumber } from 'antd';

import { X } from 'react-feather';

import './index.css';

export default function ModalOffer(props) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log(values);
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
					Harga tawaranmu akan diketahui penual, jika penjual cocok
					kamu akan segera dihubungi penjual.
				</p>
				<div className='product-match p-4 md:bg-[#EEEEEE] md:shadow-none shadow-custom bg-white rounded-2xl mb-6'>
					<div className='product flex'>
						<Avatar
							size={48}
							className='rounded-xl mr-4 flex-shrink-0'
							src='https://monochrome-watches.com/wp-content/uploads/2020/04/In-Depth-Pellikan-Watches.jpg'
						/>
						<div className='product-info w-full flex flex-col justify-center'>
							<p className='text-sm text-black font-medium mb-1'>
								Jam Tangan Casio
							</p>
							<p className='text-sm text-black mb-1'>
								Rp 250.000
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
						name='product-name'
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
						<Button type='primary' htmlType='submit' className='btn-custom w-full'>
							Kirim
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}
