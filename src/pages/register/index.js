import React from "react";
import "./index.css";
import { Col, Row, Form, Input, Button, Typography } from 'antd';
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function Register() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div>
            <Row>
                <Col span={12} className='bg-auth hidden lg:block'></Col>
                <Col xs={{ span: 24}} lg={{ span: 12}} className='lg:py-0 pt-6 flex justify-center items-center' >
                    <div className="min-w-[452px]">
                    <Title>Daftar</Title>
                        <Form
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name={['user', 'name']}
                            label="Nama"
                            required={false}
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Name!',
                            },
                            ]}
                        >
                            <Input className="rounded-lg" placeholder="Nama Lengkap" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            required={false}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input className="rounded-lg" placeholder="Contoh: johndee@gmail.com" />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            required={false}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password className="rounded-lg" placeholder="Masukkan password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full rounded-lg">
                                Daftar
                            </Button>
                        </Form.Item>
                        <p className="text-center lg:relative lg:bottom-0 fixed left-0 right-0 bottom-6 ">Sudah punya akun? <Link to="/login">Masuk di sini</Link></p>
                    </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
}