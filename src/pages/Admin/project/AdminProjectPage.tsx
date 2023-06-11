import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Action",
    key: "action",
    render: (record) => (
      <Space size="middle">
        <Button type="primary">
          <Link to={`/admin/project/${record.key}/edit`}>Edit</Link>{" "}
        </Button>
        <Button type="primary" danger ghost>
          Remove
        </Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    date: 32,
    image: "New York No. 1 Lake Park",
    category: "",
  },
];
type Props = {};

const AdminProjectPage = (props: Props) => {
  return (
    <div className="AdminProject__container">
      <Button type="primary">
        <Link to={"/admin/project/add"}>Add Project</Link>
      </Button>
      <div className="AdminProject__content">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default AdminProjectPage;
