import './index.css';
import React, { useState } from 'react';
import {
	Alert,
	InputNumber,
	Button,
	Form,
	Input,
	Select,
	Row,
	Col,
	Upload,
	message,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../features/product/productSlice';

const { Option } = Select;
const beforeUpload = (file) => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

	if (!isJpgOrPng) {
		message.error('Gambar harus berformat JPG/PNG!');
	}

	const isLt2M = file.size / 1024 / 1024 < 2;

	if (!isLt2M) {
		message.error('Gambar tidak boleh lebih dari 2MB!');
	}

	console.log(file);
	return isJpgOrPng && isLt2M;
};

export default function ProductForm() {
	const token = useSelector((state) => state.user.auth.token);
	const user = useSelector((state) => state.user.user.data);
	const { response, error, errorMessage, loading } = useSelector(
		(state) => state.product.create
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [submitType, setSubmitType] = useState(1);
	const id = user ? user.id : '';

	const onFinish = async (values) => {
		if (submitType === 1) {
			console.log('publish');
			const value = { ...values, status: 1 };
			const body = { token, id, value };
			await dispatch(createProduct(body));
			navigate('/daftar-jual');
		}
		if (submitType === 2) {
			console.log('draft');
			const value = { ...values, status: 0 };
			console.log(value);
			const body = { token, id, value };
			await dispatch(createProduct(body));
			navigate('/daftar-jual');
		}
	};

	const [loadingImage, setLoading] = useState(false);
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
			{loadingImage ? (
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
				<title>Tambah Produk</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='update-profile-wrapper max-w-[568px] md:py-10 py-6 w-full mx-auto'>
				{!!error && (
					<Alert
						className='mb-6'
						message='Error'
						description={errorMessage}
						type='error'
						showIcon
					/>
				)}
				<Form
					layout='vertical'
					form={form}
					name='control-hooks'
					onFinish={onFinish}
				>
					<Form.Item
						className='mb-4'
						name='name'
						label='Nama Produk'
						required={false}
						rules={[
							{
								required: true,
								message: 'Nama Produk tidak boleh kosong!',
							},
						]}
					>
						<Input placeholder='Nama Produk' />
					</Form.Item>
					<Form.Item
						className='mb-4'
						name='price'
						label='Harga Produk'
						required={false}
						rules={[
							{
								required: true,
								message: 'Harga Produk tidak boleh kosong!',
							},
							{
								type: 'number',
								message: 'Harga Produk harus angka!',
							},
						]}
					>
						<InputNumber placeholder='Rp 0,00' />
					</Form.Item>
					<Form.Item
						className='mb-4'
						name='category'
						label='Kategori'
						required={false}
						rules={[
							{
								required: true,
								message: 'Kategori tidak boleh kosong!',
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
						name='description'
						label='Deskripsi'
						required={false}
						rules={[
							{
								required: true,
								message: 'Deskripsi tidak boleh kosong',
							},
						]}
					>
						<Input.TextArea
							rows={2}
							placeholder='Tentang produk yang anda jual'
						/>
					</Form.Item>
					<Form.Item
						className='mb-4'
						name='foto'
						label='Foto Produk'
						required={false}
						// rules={[
						// 	{
						// 		required: true,
						// 		message: 'Foto Produk tidak boleh kosong!',
						// 	},
						// ]}
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
									loading={loading}
									className='w-full btn-custom'
									type='primary'
									htmlType='submit'
									onClick={() => setSubmitType(2)}
								>
									Preview
								</Button>
							</Col>
							<Col span={12}>
								<Button
									loading={loading}
									className='w-full btn-custom '
									type='primary'
									htmlType='submit'
									onClick={() => setSubmitType(1)}
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
