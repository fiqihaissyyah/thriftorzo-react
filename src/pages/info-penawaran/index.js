import './index.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

import SalerInformation from '../../components/saler-information';
import ModalAcceptOffer from '../../components/modal-accept-offer';
import ModalChangeStatus from '../../components/modal-change-status';

export default function InfoPenawaran() {
	const imgProduct =
		'https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg';

	const acceptEvents = { click: () => {} };
	const statusEvents = { click: () => {} };

	return (
		<div className='page-info-penawaran md:py-10 py-4'>
			<Helmet>
				<title>Info Penawaran</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='container container-small'>
				<SalerInformation edit={false} />
				<h1 className='text-sm text-black font-medium leading-5 my-6 md:block hidden'>
					Daftar Produkmu yang Ditawar
				</h1>
				<div className='notification-item flex w-full border-0 mb-0 pb-4 cursor-text'>
					<img
						className='flex-shrink-0 w-12 h-12 object-cover rounded-xl mr-4'
						src='https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80'
						alt='product'
					/>
					<div className='notification-content w-full'>
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
				<div className='notification-action md:w-1/2 w-full ml-auto'>
					{/* <Button type='primary' ghost>Tolak</Button> */}
					<Button
						type='primary'
						ghost
						onClick={() => statusEvents.click()}
					>
						Status
					</Button>
					<Button
						type='primary'
						className='ml-4'
						onClick={() => acceptEvents.click()}
					>
						Terima
					</Button>
					{/* <Button type='primary' className='ml-4'>Hubungi di <WhatsAppOutlined /></Button> */}
				</div>
			</div>
			<ModalAcceptOffer events={acceptEvents} />
			<ModalChangeStatus events={statusEvents} />
		</div>
	);
}
