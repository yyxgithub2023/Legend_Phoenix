// App.js
import React, { useState } from 'react';
import { Layout } from 'antd';
import Sider from './components/Sider';
import CustomHeader from './components/Header';
import CustomContent from './components/Content';

const { Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{height: '100vh'}}>
      <Sider collapsed={collapsed} />
      <Layout className="site-layout" style={{height: '100vh'}}>
        <CustomHeader collapsed={collapsed} toggle={toggle} />
        <CustomContent />
      </Layout>
    </Layout>
  );
};

export default App;
