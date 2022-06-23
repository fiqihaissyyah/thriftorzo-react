import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper';

import './index.css';
import SliderProA from '../../assets/images/slider_product.png';

export default function SliderProduct() {
	return (
		<div className='slider-product mt-[40px]'>
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
				<SwiperSlide className='rounded-2xl' >
					<img src={SliderProA} />
				</SwiperSlide>
				<SwiperSlide className='rounded-2xl'>
					<img src={SliderProA} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
