import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { Box, Heart, DollarSign, ChevronRight } from 'react-feather';

import './index.css';

export default function CategorySidebar(props) {
	const location = useLocation();

	return (
		<>
			<div className='sidebar-product p-6 shadow-custom rounded-2xl md:block hidden'>
				<h4 className='text-base text-black mb-6'>Kategori</h4>
				<ul className='p-0 list-none divide-y divide-solid divide-[#D0D0D0]'>
					<li className='border-0 pb-4'>
						<Link
							to='/daftar-jual'
							className={`text-black flex w-full justify-between items-center ${
								location.pathname === '/daftar-jual'
									? 'active'
									: ''
							}`}
						>
							<span className='flex items-center'>
								<Box size={24} />
								<span className='ml-2'>Semua Produk</span>
							</span>{' '}
							<ChevronRight size={24} />
						</Link>
					</li>
					<li className='border-0 py-4'>
						<Link
							to='/daftar-jual/diminati'
							className={`text-black flex w-full justify-between items-center ${
								location.pathname === '/daftar-jual/diminati'
									? 'active'
									: ''
							}`}
						>
							<span className='flex items-center'>
								<Heart size={24} />
								<span className='ml-2'>Diminati</span>
							</span>{' '}
							<ChevronRight size={24} />
						</Link>
					</li>
					<li className='border-0 pt-4'>
						<Link
							to='/daftar-jual/terjual'
							className={`text-black flex w-full justify-between items-center ${
								location.pathname === '/daftar-jual/terjual'
									? 'active'
									: ''
							}`}
						>
							<span className='flex items-center'>
								<DollarSign size={24} />
								<span className='ml-2'>Terjual</span>
							</span>{' '}
							<ChevronRight size={24} />
						</Link>
					</li>
				</ul>
			</div>
			<div className='md:hidden flex w-full md:overflow-auto overflow-x-scroll category-warpper'>
				<Link to='/daftar-jual'>
					<Button
						className={`bg-[#E2D4F0] text-[#3C3C3C] border-0 py-3 px-6 h-12 flex items-center rounded-xl btn-category mr-4 ${
							location.pathname === '/daftar-jual' ? 'active' : ''
						}`}
						type='primary'
						icon={<Box className='mr-2' />}
						size='large'
					>
						Produk
					</Button>
				</Link>
				<Link to='/daftar-jual/diminati'>
					<Button
						className={`bg-[#E2D4F0] text-[#3C3C3C] border-0 py-3 px-6 h-12 flex items-center rounded-xl btn-category mr-4 ${
							location.pathname === '/daftar-jual/diminati'
								? 'active'
								: ''
						}`}
						type='primary'
						icon={<Heart className='mr-2' />}
						size='large'
					>
						Diminati
					</Button>
				</Link>
				<Link to='/daftar-jual/terjual'>
					<Button
						className={`bg-[#E2D4F0] text-[#3C3C3C] border-0 py-3 px-6 h-12 flex items-center rounded-xl btn-category mr-4 ${
							location.pathname === '/daftar-jual/terjual'
								? 'active'
								: ''
						}`}
						type='primary'
						icon={<DollarSign className='mr-2' />}
						size='large'
					>
						Terjual
					</Button>
				</Link>
			</div>
		</>
	);
}
