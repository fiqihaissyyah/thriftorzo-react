import React from 'react';
import './index.css';

export default function Footer() {
	return (
		<div className='footer bg-[#7126B5] py-9'>
			<div className='container flex justify-between items-center'>
				<span className='text-lg font-bold leading-5 text-white'>
					Second <br />
					Hand.
				</span>
				<span className='text-sm text-white'>
					Copyright ©2022 SecondHand. All rights reserved.
				</span>
			</div>
		</div>
	);
}
