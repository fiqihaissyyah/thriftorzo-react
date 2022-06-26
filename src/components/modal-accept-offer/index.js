import React, { useState, useEffect } from 'react';
import { Button, Modal, Avatar } from 'antd';
import { X } from 'react-feather';
import { WhatsAppOutlined } from '@ant-design/icons';

import './index.css';

export default function ModalAcceptOffer(props) {
	const [isModalVisible, setIsModalVisible] = useState(false);

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
					Yeay kamu berhasil mendapat harga yang sesuai
				</p>
				<p className='text-sm text-[#8A8A8A] mb-4'>
					Segera hubungi pembeli melalui whatsapp untuk transaksi
					selanjutnya
				</p>
				<div className='product-match p-4 md:bg-[#EEEEEE] md:shadow-none shadow-custom bg-white rounded-2xl mb-6'>
					<p className='text-sm text-black font-medium text-center mb-4'>
						Product Match
					</p>
					<div className='buyer flex mb-4'>
						<Avatar
							size={48}
							className='rounded-xl mr-4 flex-shrink-0'
							src='https://joeschmoe.io/api/v1/random'
						/>
						<div className='buyer-info w-full flex flex-col justify-center'>
							<p className='text-sm text-black font-medium mb-1'>
								Nama Pembeli
							</p>
							<span className='text-[10px] text-[#8A8A8A] block leading-[14px]'>
								Kota
							</span>
						</div>
					</div>
					<div className='product flex'>
						<Avatar
							size={48}
							className='rounded-xl mr-4 flex-shrink-0'
							src='https://monochrome-watches.com/wp-content/uploads/2020/04/In-Depth-Pellikan-Watches.jpg'
						/>
						<div className='product-info w-full flex flex-col justify-center'>
							<p className='text-sm text-black mb-1'>
								Jam Tangan Casio
							</p>
							<p className='text-sm text-black mb-1'>
								Rp 250.000
							</p>
							<p className='text-sm text-black mb-0'>
								Ditawar Rp 200.000
							</p>
						</div>
					</div>
				</div>
				<Button type='primary' className='btn-custom w-full'>
					Hubungi via Whatsapp <WhatsAppOutlined />
				</Button>
			</Modal>
		</>
	);
}
