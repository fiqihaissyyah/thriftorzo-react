import './index.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';

export default function InfoPenawaran() {
	const imgProduct =
		'https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg';

	return (
		<div className='page-daftar-jual md:py-10 py-4'>
			<Helmet>
				<title>Info Penawaran</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='container'>
				<div className='saler-information p-4 shadow-custom rounded-2xl flex justify-between items-center'>
					<div className='saler-profile flex items-center'>
						<Avatar
							size={48}
							className='rounded-xl'
							src='https://joeschmoe.io/api/v1/random'
						/>
						<div className='ml-4'>
							<p className='text-sm text-black mb-1'>
								Nama Pembeli
							</p>
							<span className='text-[10px] text-[#8A8A8A] block leading-[14px]'>
								Kota
							</span>
						</div>
					</div>
				</div>
				<h1 className='text-sm text-black font-medium leading-5 mb-6 mt-6 md:block hidden'>
					Daftar Produkmu yang Ditawar
				</h1>
			</div>
			<div className='notification p-6 bg-white rounded-2xl w-[568px] mt-6 ml-[436px]'>
				<div className='notification-item flex'>
					<img
						className='w-12 h-12 object-cover rounded-xl mr-4'
						src='https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80'
						alt='product'
					/>
					<div className='notification-content max-w-[264px] w-full'>
						<div className='flex justify-between items-center mb-1'>
							<span className='text-[10px] text-[#8A8A8A]'>
								Penawaran produk
							</span>
							<span className='flex items-center text-[10px] text-neutral-500'>
								20 Apr, 14:04
							</span>
						</div>
						<p className='mb-1 text-black text-sm'>
							Jam Tangan Casio
						</p>
						<p className='mb-1 text-black text-sm'>Rp 250.000</p>
						<p className='mb-1 text-black text-sm'>
							Ditawar Rp 200.000
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
