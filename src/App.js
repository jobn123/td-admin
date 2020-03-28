import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Douyin from './pages/Douyin';
import Login from './pages/Login';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
import Cookies from 'js-cookie'
const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const loginflag = false
  debugger
  const onCollapse = (e) => {
    setCollapsed(e)
  };
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh', display: loginflag ? 'block' : 'none' }}>
        <Router>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <PieChartOutlined />
                <Link className="link" to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <DesktopOutlined />
                <Link className="link" to="/douyin">KOL</Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    <span>用户</span>
                  </span>
                }>
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <TeamOutlined />
                    <span>报修</span>
                  </span>
                }>
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <FileOutlined />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" 
              style={{ padding: 0, display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingRight: 80 }} >
              <div style={{ position: 'relative' }} className="tdheader-avatar">
                <Avatar
                  style={{
                    backgroundColor: '#f56a00',
                    verticalAlign: 'middle'
                  }}
                  size="large">
                    张三 
                </Avatar>
                <div className="avatar-info">x</div>
              </div>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 500 }}>
                <Route exact path="/" component={Home} />
                <Route path="/douyin" component={Douyin} />
                <Route path="/about" component={About} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Copyrights 2019 @Eleven</Footer>
          </Layout>
        </Router>
      </Layout>
      <Layout
        style={{ minHeight: '100vh', display: loginflag ? 'none' : 'block', position: 'relative' }}>
        <Router>
          <Route path="/login" component={Login} />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
