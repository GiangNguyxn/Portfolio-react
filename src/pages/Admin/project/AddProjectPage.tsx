import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, DatePicker, Upload } from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

type Props = {};

const AddProjectPage = (props: Props) => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name Project"
          name="name"
          rules={[{ required: true, message: "Please input your name !" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date Project"
          name="date"
          rules={[{ required: true, message: "Please input your date !" }]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          label="Category "
          name="category"
          rules={[{ required: true, message: "Please input your category !" }]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Upload" name="image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          label="TextArea"
          name="des"
          rules={[{ required: true, message: "Please input your  des!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Link Project"
          name="link"
          rules={[{ required: true, message: "Please input your  link!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add New Product
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddProjectPage;
