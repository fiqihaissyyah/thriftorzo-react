import React from 'react';
import { Button } from 'antd';
import { Plus } from 'react-feather';

import './index.css';

export default function SellButton() {
	return (
		<div className='fixed bottom-[24px] left-0 right-0 z-10'>
			<Button
				className='bg-[#7126b5] text-[#ffffff] border-0 py-3 px-6 h-[52px] flex items-center rounded-xl sell-btn mx-auto'
				type='primary'
				icon={<Plus className='mr-4' />}
				size='large'
			>
				Jual
			</Button>
		</div>
	);
}
