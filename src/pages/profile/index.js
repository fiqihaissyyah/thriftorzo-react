import "./index.css";
import React from "react";
import { Button, Form, Input, Select, Row, Col } from "antd";

const { Option } = Select;
const { TextArea } = Input;

export default function Profile() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <Row>
        <Col>
          <Form
            layout="vertical"
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="kota"
              label="Kota"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Pilih Kota" allowClear>
                <Option value="male">Bali</Option>
                <Option value="female">Surabaya</Option>
                <Option value="other">Jakarta</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="alamat"
              label="Alamat"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue("gender") === "other" ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item>
              <Button className="w-full" type="primary" htmlType="submit">
                Simpan
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
