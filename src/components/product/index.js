import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Product(props) {
	const currency = (value) =>
		new Intl.NumberFormat('en-ID', {
			style: 'currency',
			currency: 'IDR',
		}).format(value);

	return (
		<Link to='/product/detail'>
			<div className='product-card pt-2 px-2 pb-4 rounded-[4px]'>
				<img
					className='mb-2 rounded-[4px] product-image w-full h-28 object-cover'
					src={props.img}
					alt={props.title}
				/>
				<h4 className='text-sm text-black mb-1'>{props.title}</h4>
				<span className='block mb-2 text-[10px] text-[#8A8A8A]'>
					{props.category}
				</span>
				<span className='block text-sm text-black'>
					{currency(props.price)}
				</span>
			</div>
		</Link>
	);
}
