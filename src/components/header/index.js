import React from "react";
import { Col, Row, Button, Form, Input } from 'antd';
import { LogIn, Search } from 'react-feather';
import "./index.css";

export default function Header() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="header py-[18px]">
            <div className="container">
                <Row gutter={30}>
                    <Col span={12}>
                        <Row gutter={24} className="w-full">
                            <Col>
                                <span className="text-lg font-bold leading-4 text-[#8b48c2]">
                                    Second <br />Hand.
                                </span>
                            </Col>
                            <Col flex="auto">
                                <Form
                                    form={form}
                                    name="basic"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item name="search" className="mb-0">
                                        <Input className="search-bar" placeholder="Cari di sini ..." suffix={<Search color="#8A8A8A" size={24}/>} />
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} className="flex justify-end">
                        <Button className="py-[14px] px-4 h-12 text-sm flex items-center rounded-xl" type="primary" icon={<LogIn size={20} className="mr-2" />} size="large">
                            Masuk
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}