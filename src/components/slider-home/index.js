import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';
import sliderItem from '../../assets/images/img-banner-1.png';

export default function SliderHome(props) {
	return (
		<Swiper
			slidesPerView={'auto'}
			centeredSlides={true}
			spaceBetween={16}
			className='mt-8'
		>
			<SwiperSlide>
				<div className='slider-item'>
					<img src={sliderItem} alt='Slider 1' />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='slider-item'>
					<img src={sliderItem} alt='Slider 1' />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='slider-item'>
					<img src={sliderItem} alt='Slider 1' />
				</div>
			</SwiperSlide>
		</Swiper>
	);
}
