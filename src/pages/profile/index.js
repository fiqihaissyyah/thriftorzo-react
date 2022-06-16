import "./index.css";
import React, { useState } from "react";
import { Button, Form, Input, Select, Row, Col, Upload, message } from "antd";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

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
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined style={{ fontSize: "30px", color: "#7126B5" }} />
      ) : (
        <CameraOutlined style={{ fontSize: "24px", color: "#7126B5" }} />
      )}
    </div>
  );

  return (
    <div className="container">
      <Row>
        <Col span={12} push={6}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader relative mt-10 mb-6 w-24 h-24 mx-auto block"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
          <Form
            layout="vertical"
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Nama"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="rounded-2xl h-12" placeholder="Nama" />
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
              <Select
                className="input-city"
                placeholder="Pilih Kota"
                allowClear
              >
                <Option value="bali">Bali</Option>
                <Option value="surabaya">Surabaya</Option>
                <Option value="jakarta">Jakarta</Option>
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
              <TextArea
                rows={4}
                className="rounded-2xl h-20"
                placeholder="Contoh: Jalan Ikan Hiu 33"
              />
            </Form.Item>
            <Form.Item
              name="no handphone"
              label="No Handphone*"
              className="mt-4"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                className="rounded-2xl h-12"
                placeholder="contoh: +628123456789"
              />
            </Form.Item>
            {/* <Form.Item
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
            </Form.Item> */}
            <Form.Item>
              <Button
                className="w-full rounded-2xl h-12"
                type="primary"
                htmlType="submit"
              >
                Simpan
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
