// Content.js
import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const CustomContent = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        flex: 1,
      }}
    >
      Content
    </Content>
  );
};

export default CustomContent;
