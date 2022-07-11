import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Col, Row, Button, Form, Input, Dropdown, Menu, Drawer } from 'antd';
import {
	LogIn,
	Search,
	List,
	Bell,
	User,
	Menu as MenuIcon,
	X,
	ArrowLeft,
} from 'react-feather';
import Notification from '../notification';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, reset } from '../../features/user/userSlice';
import { getProduct } from '../../features/product/productSlice';

export default function Header(props) {
	const { token, success } = useSelector((state) => state.user.auth);

	const [form] = Form.useForm();
	const [isLogin, setLogin] = useState(false);
	const [visible, setVisible] = useState(false);
	const [placement, setPlacement] = useState('left');

	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onFinish = (values) => {
		if (values.search) {
			const page = 0;
			const category = '';
			const productName = values.search;

			dispatch(getProduct({ productName, category, page }));
			window.scrollTo(0, 0);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const handleClick = ({ key }) => {
		console.log(key);
	};

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	const handleLogin = () => {
		navigate('/login');
	};

	const navigateBack = () => {
		navigate(-1);
	};

	const handleLogout = async () => {
		await navigate('/');
		await localStorage.removeItem('token');
		await localStorage.removeItem('user');
		dispatch(reset());
		setLogin(false);
		console.log('logout');
	};

	useEffect(() => {
		onClose();
	}, [location.pathname]);

	useEffect(() => {
		if (success === true) {
			setLogin(true);
			dispatch(getUser(token));
		}
	}, [token, success]);

	const userMenu = (
		<Menu onClick={handleClick} className='mt-3'>
			<Menu.Item key='item-1'>
				<Link to='/profile'>Akun Saya</Link>
			</Menu.Item>
			<Menu.Item key='item-2' onClick={handleLogout}>
				Logout
			</Menu.Item>
		</Menu>
	);

	const notificationDropdown = <Notification />;

	return (
		<div
			className={`${
				location.pathname === '/' ? 'on-top' : ''
			} header py-[18px] ${
				location.pathname.includes(['/product'])
					? 'md:block hidden'
					: ''
			}`}
		>
			<div className='container relative'>
				{props.title && (
					<div className='absolute left-0 right-0 top-0 bottom-0 flex items-center'>
						<h1 className='text-base text-center mb-0 w-full'>
							{props.title ? props.title : 'Page Title'}
						</h1>
					</div>
				)}
				{location.pathname.includes(['/daftar-jual']) && (
					<div className='absolute left-0 right-0 top-0 bottom-0 flex items-center md:hidden'>
						<h1 className='text-base text-center mb-0 w-full'>
							Daftar Jual Saya
						</h1>
					</div>
				)}
				<Row gutter={24}>
					<Col xs={{ span: 24 }} md={{ span: 12 }}>
						<Row gutter={24} className='row-on-mobile'>
							<Col className='flex items-center'>
								<Link
									to={'/'}
									className='text-lg font-bold leading-5 text-[#7126B5] md:block hidden'
								>
									Second <br />
									Hand.
								</Link>
								{props.navigation && (
									<button
										className='navbar-toggler w-12 h-12 bg-white rounded-2xl border-0 flex justify-center items-center navigation-back md:absolute md:left-[10vw] md:top-[100px] relative cursor-pointer'
										onClick={navigateBack}
									>
										<ArrowLeft size={24} color='#000000' />
									</button>
								)}
								{!props.navigation && (
									<button
										className='md:hidden navbar-toggler w-12 h-12 bg-white rounded-2xl border-0 flex justify-center items-center'
										onClick={showDrawer}
									>
										<MenuIcon size={24} />
									</button>
								)}
							</Col>
							{!props.title && !props.blank && (
								<Col
									flex='auto'
									className={
										location.pathname !== '/' &&
										'md:block hidden'
									}
								>
									<Form
										form={form}
										name='basic'
										onFinish={onFinish}
										onFinishFailed={onFinishFailed}
										autoComplete='off'
									>
										<Form.Item
											name='search'
											className='mb-0'
										>
											<Input
												className='search-bar'
												placeholder='Cari di sini ...'
												suffix={
													<Search
														color='#8A8A8A'
														size={24}
													/>
												}
											/>
										</Form.Item>
									</Form>
								</Col>
							)}
						</Row>
					</Col>
					{!props.title && !props.blank && (
						<Col
							span={12}
							className='hidden md:flex justify-end items-center'
						>
							{!isLogin && (
								<Button
									className='py-[14px] px-4 h-12 text-sm flex items-center rounded-xl'
									onClick={handleLogin}
									type='primary'
									icon={<LogIn size={20} className='mr-2' />}
									size='large'
								>
									Masuk
								</Button>
							)}
							{isLogin && (
								<>
									<Row gutter={24}>
										<Col span={8}>
											<Link to='/daftar-jual'>
												<List
													size={24}
													color='#7126B5'
												/>
											</Link>
										</Col>
										<Col span={8}>
											<Dropdown
												className='cursor-pointer'
												placement='bottomRight'
												overlay={notificationDropdown}
												trigger={['click']}
											>
												<Bell
													size={24}
													color='#7126B5'
												/>
											</Dropdown>
										</Col>
										<Col span={8}>
											<Dropdown
												className='cursor-pointer'
												overlay={userMenu}
												trigger={['click']}
											>
												<User
													size={24}
													color='#7126B5'
												/>
											</Dropdown>
										</Col>
									</Row>
								</>
							)}
						</Col>
					)}
				</Row>
			</div>
			<Drawer
				placement={placement}
				closable={false}
				onClose={onClose}
				visible={visible}
				key={placement}
				contentWrapperStyle={{ width: '180px' }}
			>
				<div className='sidebar-top flex justify-between items-center'>
					<span className='mobile-brand text-sm font-bold'>
						Second Hand
					</span>
					<X onClick={onClose} />
				</div>
				<div className='sidebar-menu mt-5'>
					{!isLogin && (
						<Button
							className='py-[14px] px-4 h-12 text-sm flex items-center rounded-xl'
							onClick={handleLogin}
							type='primary'
							icon={<LogIn size={20} className='mr-2' />}
							size='large'
						>
							Masuk
						</Button>
					)}
					{isLogin && (
						<>
							<Link
								className='text-sm hover:text-[#7126B5] mb-4 block text-black'
								to='/'
							>
								Home
							</Link>
							<Link
								className='text-sm hover:text-[#7126B5] mb-4 block text-black'
								to='/notification'
							>
								Notifikasi
							</Link>
							<Link
								className='text-sm hover:text-[#7126B5] mb-4 block text-black'
								to='/daftar-jual'
							>
								Daftar Jual
							</Link>
							<Link
								className='text-sm hover:text-[#7126B5] mb-4 block text-black'
								to='/profile'
							>
								Akun Saya
							</Link>
							<span
								className='text-sm hover:text-[#7126B5] mb-4 block text-black'
								onClick={handleLogout}
							>
								Logout
							</span>
						</>
					)}
				</div>
			</Drawer>
		</div>
	);
}
