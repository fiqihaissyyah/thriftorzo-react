import React, { useState, useEffect } from 'react';
import { Button, Modal, Radio } from 'antd';
import { X } from 'react-feather';

import './index.css';

export default function ModalChangeStatus(props) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [value, setValue] = useState(1);

	const onChange = (e) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
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
			<Modal closeIcon={<X size={24} />} bodyStyle={{ padding: '56px 32px 24px' }} width={360} footer={null} visible={isModalVisible} onCancel={handleCancel}>
				<p className='text-sm text-black font-medium mb-[26px]'>Perbarui status penjualan produkmu</p>
				<Radio.Group onChange={onChange} value={value} className='mb-8'>
					<Radio value={1}><span className='text-sm text-black mb-2 block'>Berhasil terjual</span> <p className='mb-[26px] text-sm text-[#8A8A8A]'>Kamu telah sepakat menjual produk ini kepada pembeli</p></Radio>
					<Radio value={2}><span className='text-sm text-black mb-2 block'>Batalkan transaksi</span> <p className='mb-0 text-sm text-[#8A8A8A]'>Kamu telah sepakat menjual produk ini kepada pembeli</p></Radio>
				</Radio.Group>
				<Button type='primary' className='btn-custom w-full'>Kirim</Button>
			</Modal>
		</>
	);
}
