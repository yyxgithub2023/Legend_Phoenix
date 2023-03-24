// Sider.js
import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const Sider = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} style={{height: '100vh'}}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height: '100%'}}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sider;
