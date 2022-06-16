import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';

import './index.css';
import SliderBg from '../../assets/images/slider_bg.png';
import Gift from '../../assets/images/png_gift.png';

export default function SliderHome() {
	return (
		<Swiper
			loop={true}
			slidesPerView={'auto'}
			centeredSlides={true}
			spaceBetween={30}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
			className='md:mt-8 mt-0'
		>
			<SwiperSlide>
				<div className='slider-item md:bg-[#FFE9CA] md:py-[50px] md:px-20 px-4 pt-[118px] pb-[160px] md:rounded-[20px] rounded-none relative'>
					<div className='slider-content relative z-10'>
						<h2 className='text-[#151515] md:text-4xl text-xl md:leading-[54px] leading-[30px] font-bold mb-4'>
							Bulan Ramadhan <br /> Banyak diskon!
						</h2>
						<p className='text-sm text-[#151515] mb-2'>
							Diskon Hingga
						</p>
						<span className='text-[#FA2C5A] md:text-[32px] text-lg md:leading-9 leading-[26px]'>
							60%
						</span>
					</div>
					<di className='slider-bg absolute right-0 top-0'>
						<img src={SliderBg} alt='Background' />
					</di>
					<img
						className='absolute md:right-[30%] lg:right-[35%] md:top-[30%] top-[118px] right-6'
						src={Gift}
						alt='Background'
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='slider-item md:bg-[#FFE9CA] md:py-[50px] md:px-20 px-4 pt-[118px] pb-[160px] md:rounded-[20px] rounded-none relative'>
					<div className='slider-content relative z-10'>
						<h2 className='text-[#151515] md:text-4xl text-xl md:leading-[54px] leading-[30px] font-bold mb-4'>
							Bulan Ramadhan <br /> Banyak diskon!
						</h2>
						<p className='text-sm text-[#151515] mb-2'>
							Diskon Hingga
						</p>
						<span className='text-[#FA2C5A] md:text-[32px] text-lg md:leading-9 leading-[26px]'>
							60%
						</span>
					</div>
					<di className='slider-bg absolute right-0 top-0'>
						<img src={SliderBg} alt='Background' />
					</di>
					<img
						className='absolute md:right-[30%] lg:right-[35%] md:top-[30%] top-[118px] right-6'
						src={Gift}
						alt='Background'
					/>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='slider-item md:bg-[#FFE9CA] md:py-[50px] md:px-20 px-4 pt-[118px] pb-[160px] md:rounded-[20px] rounded-none relative'>
					<div className='slider-content relative z-10'>
						<h2 className='text-[#151515] md:text-4xl text-xl md:leading-[54px] leading-[30px] font-bold mb-4'>
							Bulan Ramadhan <br /> Banyak diskon!
						</h2>
						<p className='text-sm text-[#151515] mb-2'>
							Diskon Hingga
						</p>
						<span className='text-[#FA2C5A] md:text-[32px] text-lg md:leading-9 leading-[26px]'>
							60%
						</span>
					</div>
					<di className='slider-bg absolute right-0 top-0'>
						<img src={SliderBg} alt='Background' />
					</di>
					<img
						className='absolute md:right-[30%] lg:right-[35%] md:top-[30%] top-[118px] right-6'
						src={Gift}
						alt='Background'
					/>
				</div>
			</SwiperSlide>
		</Swiper>
	);
}
