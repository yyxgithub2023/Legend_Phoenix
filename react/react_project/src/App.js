import React, { useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import MenuComponent from './components/MenuComponent';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layout" style={{height: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
        <div className="logo" />
        {/*<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>*/}
        {/*  <Menu.Item key="1">nav 1</Menu.Item>*/}
        {/*  <Menu.Item key="2">nav 2</Menu.Item>*/}
        {/*  <Menu.Item key="3">nav 3</Menu.Item>*/}
        {/*</Menu>*/}
        {/*<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height: '100%'}}>*/}
        {/*    <Menu.Item key="1" icon={<UserOutlined />}>*/}
        {/*        nav 1*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="2" icon={<VideoCameraOutlined />}>*/}
        {/*        nav 2*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="3" icon={<UploadOutlined />}>*/}
        {/*        nav 3*/}
        {/*    </Menu.Item>*/}
        {/*</Menu>*/}
        <MenuComponent />
      </Sider>
      <Layout>
        <Header>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
            style: {color: '#fff'}
          })}
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ padding: '0 50px', height: 'calc(100vh - 64px)' }}>
          <div className="site-layout-content" style={{height: '100%'}}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
