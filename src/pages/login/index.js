import React, { useEffect } from 'react';
import './index.css';
import { Col, Row, Form, Input, Button, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../features/user/userSlice';

export default function Login() {
	const { success, error, errorMessage, loading } = useSelector(
		(state) => state.user.auth
	);

	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const navigate = useNavigate();

	const onFinish = async (values) => {
		dispatch(auth(values))
	};

	useEffect(() => {
		if (success === true) {
			form.resetFields()
			navigate('/');
		}
	}, [success]);

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Row>
			<Col span={12} className='bg-auth hidden lg:block'></Col>
			<Col
				xs={{ span: 24 }}
				lg={{ span: 12 }}
				className='lg:py-0 pt-6 flex justify-center items-center'
			>
				<div className='max-w-[452px] w-full mx-4'>
					<h1 className='text-2xl text-black mb-6 font-bold'>
						Masuk
					</h1>
					{!!error && (
						<Alert
							className='mb-6'
							message="Error"
							description="Email/Password anda Salah!"
							type="error"
							showIcon
						/>
					)}
					<Form
						form={form}
						name='basic'
						layout='vertical'
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete='off'
					>
						<Form.Item
							className='mb-4'
							label='Email'
							name='email'
							required={false}
							rules={[
								{
									required: true,
									message: 'Please input your email!',
								},
							]}
						>
							<Input placeholder='Contoh: johndee@gmail.com' />
						</Form.Item>
						<Form.Item
							className='mb-6'
							label='Password'
							name='password'
							required={false}
							rules={[
								{
									required: true,
									message: 'Please input your password!',
								},
							]}
						>
							<Input.Password placeholder='Masukkan password' />
						</Form.Item>
						<Form.Item className='mb-10'>
							<Button
								loading={loading}
								type='primary'
								htmlType='submit'
								className='w-full btn-custom'
							>
								Masuk
							</Button>
						</Form.Item>
						<p className='text-sm text-black text-center lg:relative fixed left-0 right-0 bottom-6 lg:bottom-0'>
							Belum punya akun?{' '}
							<Link className='font-bold' to='/register'>
								Daftar di sini
							</Link>
						</p>
					</Form>
				</div>
			</Col>
		</Row>
	);
}
