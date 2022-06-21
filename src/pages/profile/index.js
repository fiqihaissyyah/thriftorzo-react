import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Select, Row, Col, Upload, message } from 'antd';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

const { Option } = Select;
const beforeUpload = (file) => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}

	const isLt2M = file.size / 1024 / 1024 < 2;

	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}

	console.log(file);
	return isJpgOrPng && isLt2M;
};

export default function Profile() {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log(values);
	};

	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState();

	const handleChange = (info) => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			return;
		}

		if (info.file.status === 'done') {
			setImageUrl(info.file.originFileObj);
			console.log(info.file.originFileObj);
		}
	};

	const uploadButton = (
		<div>
			{loading ? (
				<LoadingOutlined
					style={{ fontSize: '30px', color: '#7126B5' }}
				/>
			) : (
				<CameraOutlined
					style={{ fontSize: '24px', color: '#7126B5' }}
				/>
			)}
		</div>
	);

	const [cities, setCity] = useState([]);

	const getCity = async () => {
		const country = { country: 'indonesia' };
		await axios
			.post(
				'https://countriesnow.space/api/v0.1/countries/cities',
				country
			)
			.then((res) => {
				const data = res.data.data;
				setCity(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	useEffect(() => {
		getCity();
		console.log(cities);
	}, []);

	return (
		<div className='container'>
			<Helmet>
				<title>Lengkapi Info Akun</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='update-profile-wrapper max-w-[568px] md:pt-10 pt-6 w-full mx-auto'>
				<Upload
					name='avatar'
					listType='picture-card'
					className='avatar-uploader relative mb-6 w-24 h-24 mx-auto block'
					showUploadList={false}
					beforeUpload={beforeUpload}
					onChange={handleChange}
				>
					{imageUrl ? (
						<img
							src={imageUrl}
							alt='avatar'
							style={{
								width: '100%',
							}}
						/>
					) : (
						uploadButton
					)}
				</Upload>
				<Form
					layout='vertical'
					form={form}
					name='control-hooks'
					onFinish={onFinish}
				>
					<Form.Item
						className='mb-4'
						name='name'
						label='Nama*'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your Name!',
							},
						]}
					>
						<Input placeholder='Nama' />
					</Form.Item>
					<Form.Item
						className='mb-4 select-city'
						name='city'
						label='Kota*'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your City!',
							},
						]}
					>
						<Select placeholder='Pilih Kota' allowClear showSearch>
							{!cities && cities.length < 0 && (
								<Option value=''>Loading</Option>
							)}
							{!!cities &&
								cities.length > 0 &&
								cities.map((item, index) => (
									<Option value={item}>{item}</Option>
								))}
						</Select>
					</Form.Item>
					<Form.Item
						className='mb-4'
						name='address'
						label='Alamat*'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your Address!',
							},
						]}
					>
						<Input.TextArea rows={2} placeholder='Alamat' />
					</Form.Item>
					<Form.Item
						className='mb-6'
						name='phone'
						label='No Handphone*'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your Phone!',
							},
						]}
					>
						<Input placeholder='contoh: +628123456789' />
					</Form.Item>
					<Form.Item>
						<Button
							className='w-full btn-custom'
							type='primary'
							htmlType='submit'
						>
							Simpan
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
