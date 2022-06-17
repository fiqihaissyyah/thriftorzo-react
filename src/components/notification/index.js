import React from 'react';
import { Col, Row } from 'antd';

import './index.css';

export default function Notification() {
	return (
		<div className='notification p-6 bg-white rounded-2xl w-[376px] mt-4'>
			<div className='notification-item flex'>
				<img className="w-12 h-12 object-cover rounded-xl mr-4" src='https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='product' />
				<div className='notification-content max-w-[264px] w-full'>
					<div className='flex justify-between items-center mb-1'>
						<span className='text-[10px] text-[#8A8A8A]'>Penawaran produk</span>
						<span className='flex items-center text-[10px] text-neutral-500'>20 Apr, 14:04 <span className='h-2 w-2 rounded-full bg-red-600 inline-block ml-2'></span></span>
					</div>
					<p className='mb-1 text-black text-sm'>Jam Tangan Casio</p>
					<p className='mb-1 text-black text-sm'>Rp 250.000</p>
					<p className='mb-1 text-black text-sm'>Ditawar Rp 200.000</p>
				</div>
			</div>
			<div className='notification-item flex'>
				<img className="w-12 h-12 object-cover rounded-xl mr-4" src='https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='product' />
				<div className='notification-content max-w-[264px] w-full'>
					<div className='flex justify-between items-center mb-1'>
						<span className='text-[10px] text-[#8A8A8A]'>Berhasil di terbitkan</span>
						<span className='flex items-center text-[10px] text-neutral-500'>20 Apr, 14:04 <span className='h-2 w-2 rounded-full bg-red-600 inline-block ml-2'></span></span>
					</div>
					<p className='mb-1 text-black text-sm'>Jam Tangan Casio</p>
					<p className='mb-1 text-black text-sm'>Rp 250.000</p>
				</div>
			</div>
			<div className='notification-item flex'>
				<img className="w-12 h-12 object-cover rounded-xl mr-4" src='https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='product' />
				<div className='notification-content max-w-[264px] w-full'>
					<div className='flex justify-between items-center mb-1'>
						<span className='text-[10px] text-[#8A8A8A]'>Berhasil di terbitkan</span>
						<span className='flex items-center text-[10px] text-neutral-500'>20 Apr, 14:04 <span className='h-2 w-2 rounded-full bg-red-600 inline-block ml-2'></span></span>
					</div>
					<p className='mb-1 text-black text-sm'>Jam Tangan Casio</p>
					<p className='mb-1 text-black text-sm line-through'>Rp 250.000</p>
					<p className='mb-1 text-black text-sm'>Berhasil Ditawar Rp 200.000</p>
					<span className='text-[10px] text-[#8A8A8A]'>Kamu akan segera dihubungi penjual via whatsapp</span>
				</div>
			</div>
		</div>
	);
}
