import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper';

import './index.css';
import SliderProA from '../../assets/images/slider_product.png';

export default function SliderProduct(props) {
	return (
		<div className='slider-product'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper'
			>
				{!!props.item &&
					props.item.map((i, index) => (
						<SwiperSlide key={index}>
							<img
								className='md:rounded-2xl rounded-none'
								src={i}
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}
