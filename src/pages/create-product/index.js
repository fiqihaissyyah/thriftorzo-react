import './index.css';
import React, { useEffect, useState } from 'react';
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
import { PlusOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../features/product/productSlice';

const { Option } = Select;

export default function ProductForm() {
	const token = useSelector((state) => state.user.auth.token);
	const user = useSelector((state) => state.user.user.data);
	const { draft, response, error, errorMessage, loading } = useSelector(
		(state) => state.product.create
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [form] = Form.useForm();
	const [submitType, setSubmitType] = useState(1);
	const [fileList, setFileList] = useState([]);
	const id = user ? user.id : '';

	const uploadProps = {
		onRemove: (file) => {
			const index = fileList.indexOf(file);
			const newFileList = fileList.slice();
			newFileList.splice(index, 1);
			setFileList(newFileList);
		},
		beforeUpload: (file) => {
			console.log(file)
			setFileList([...fileList, file]);
			return false;
		},
		fileList,
	};

	const getFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	const onFinish = async (values) => {
		if (submitType === 1) {
			values = { ...values, status: 0, publish: 1, userId: id, imageFiles: fileList };
			dispatch(createProduct({ token, values }))
			message.success('Berhasil Menambah Produk!');
			// navigate('/daftar-jual');
		}
		if (submitType === 2) {
			values = { ...values, status: 0, publish: 0, userId: id, imageFiles: fileList };
			dispatch(createProduct({ token, values }))
			console.log('real', draft)
			message.success('Berhasil Menambah Produk!');
			// navigate('/daftar-jual');
		}
	};

	useEffect(() => {
		console.log('useffect', draft)
	}, [draft]);

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
						name='imageFiles'
						label='Foto Produk'
						required={false}
						getValueFromEvent={getFile}
						rules={[
							{
								required: true,
								message: 'Foto Produk tidak boleh kosong!',
							},
						]}
					>
						<Upload
							{...uploadProps}
							maxCount={4}
							listType='picture-card'
							className='product-upload relative mb-6 w-full h-24'
							accept='image/*'
						>
							<PlusOutlined style={{ fontSize: '24px', color: '#8A8A8A' }} />
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
