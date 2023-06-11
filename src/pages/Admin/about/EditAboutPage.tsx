import React from "react";
import "../about/EditAbout.css";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";
const { TextArea } = Input;
const fileList: UploadFile[] = [];

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
type Props = {};

const EditAboutPage = (props: Props) => {
  return (
    <section className="adminAbout__container">
      <div className="form-admiAbout">
        <h2 className="adminAbout-title">Edit About</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 1000 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: "Please input your image!" }]}
          >
            <Upload listType="picture">
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Description"
            name="desc"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 20 }}>
            <Button type="primary" htmlType="submit">
              Save Form
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="card-adminAbout">
        <h1 className="card-adminAbout-name">Name</h1>
        <img
          className="card-adminAbout-img"
          src="https://picsum.photos/seed/picsum/200/300"
          alt=""
        />
        <p className="card-adminAbout-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas,
          repellendus debitis error laboriosam numquam magnam itaque. Id dolor
          necessitatibus eaque, fugit expedita possimus hic facilis laudantium
          ducimus, non omnis.
        </p>
      </div>
    </section>
  );
};

export default EditAboutPage;
