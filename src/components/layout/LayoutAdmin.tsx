import { Layout, Menu, theme } from "antd";
import React from "react";
import "./Layout.css";
import logoAdmin from "../../assets/logo.svg";
import { Outlet, Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;
const { Item } = Menu;

type Props = {};

const LayoutAdmin = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Link to={"/"}>
            <img className="logoAdmin" src={logoAdmin} alt="" />
          </Link>
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu>
            <Item>
              <Link to={"/admin/about"}>About</Link>
            </Item>
            <Item>
              <Link to={"/admin/skill"}>Skill</Link>
            </Item>
            <Item>
              <Link to={"/admin/projects"}>Project</Link>
            </Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
