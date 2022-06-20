import './index.css';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Select, Row, Col, Upload, message } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
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

export default function ProductForm() {
	useEffect(() => {
		document.title = 'Info Akun';
	}, []);
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
					style={{ fontSize: '30px', color: '#8A8A8A' }}
				/>
			) : (
				<PlusOutlined style={{ fontSize: '24px', color: '#8A8A8A' }} />
			)}
		</div>
	);

	return (
		<div className='container'>
			<Helmet>
				<title>Lengkapi Info Akun</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='update-profile-wrapper max-w-[568px] md:py-10 py-6 w-full mx-auto'>
				<Form
					layout='vertical'
					form={form}
					name='control-hooks'
					onFinish={onFinish}
				>
					<Form.Item
						className='mb-4'
						name='product-name'
						label='Nama Produk'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your Product Name!',
							},
						]}
					>
						<Input placeholder='Nama Produk' />
					</Form.Item>
					<Form.Item
						className='mb-4'
						name='product-price'
						label='Harga Produk'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your Product Price!',
							},
						]}
					>
						<Input placeholder='Rp 0,00' />
					</Form.Item>
					<Form.Item
						className='mb-4'
						name='category'
						label='Kategori'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your Category!',
							},
						]}
					>
						<Select placeholder='Pilih Kategori' allowClear>
							<Option value='hobi'>Hobi</Option>
							<Option value='kendaraan'>Kendaraan</Option>
							<Option value='baju'>Baju</Option>
							<Option value='elektronik'>Elektronik</Option>
							<Option value='kesehatan'>Kesehatan</Option>
						</Select>
					</Form.Item>
					<Form.Item
						className='mb-4'
						name='deskripsi'
						label='Deskripsi'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your Description!',
							},
						]}
					>
						<Input placeholder='Contoh: Jalan Ikan Hiu 33' />
					</Form.Item>
					<Form.Item
						className='mb-4'
						name='foto'
						label='Foto Produk'
						required={false}
						rules={[
							{
								required: true,
								message: 'Please input your Image Product!',
							},
						]}
					>
						<Upload
							name='avatar'
							listType='picture-card'
							className='product-upload relative mb-6 w-24 h-24'
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
					</Form.Item>
					<Form.Item>
						<Row gutter={16}>
							<Col span={12}>
								<Button
									ghost
									className='w-full btn-custom'
									type='primary'
									htmlType='submit'
								>
									Preview
								</Button>
							</Col>
							<Col span={12}>
								<Button
									className='w-full btn-custom '
									type='primary'
									htmlType='submit'
								>
									Terbitakan
								</Button>
							</Col>
						</Row>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
