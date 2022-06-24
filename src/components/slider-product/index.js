import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper';

import './index.css';
import SliderProA from '../../assets/images/slider_product.png';

export default function SliderProduct() {
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
				<SwiperSlide>
					<img className='md:rounded-2xl rounded-none' src={SliderProA} />
				</SwiperSlide>
				<SwiperSlide>
					<img className='md:rounded-2xl rounded-none' src={SliderProA} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
