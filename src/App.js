import { Layout, Menu, Breadcrumb, Avatar } from 'antd'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { setModel, useModel } from 'flooks'
import globalstate from './store'
import Home from './pages/Home'
import About from './pages/About'
import Repaire from './pages/Repaire'
import Login from './pages/Login'
import User from './pages/User'
import UserCreate from './pages/User/create'
import Villages from './pages/Villages'
import Faults from './pages/Faults'
import Cookies from 'js-cookie'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined
} from '@ant-design/icons'
import './App.css'
import 'antd/dist/antd.css'
const { Header, Footer, Content, Sider } = Layout
// const { SubMenu } = Menu
setModel('globalstate', globalstate)

const menulists = {
  '': "0",
  'repaire': "1",
  'user': "2",
  'villages': "3",
  'faults': "4"
}

function App() {
  
  const pname = window.location.pathname.replace('/', '')
  const pathindex = menulists[pname]
  // debugger
  const { loginStatus } = useModel('globalstate')
  let islogin = false
  if (Cookies.get('td_login')) {
    islogin = true
  } else {
    islogin = loginStatus
  }
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (e) => {
    setCollapsed(e)
  }

  let layoutTemp

  if (!islogin) {
    layoutTemp = (
      <Layout
        style={{ minHeight: '100vh' }}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </Router>
      </Layout>
    )
  } else {
    layoutTemp = (
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={[pathindex]} mode="inline">
              <Menu.Item key="0">
                <PieChartOutlined />
                <Link className="link" to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <DesktopOutlined />
                <Link className="link" to="/repaire">报修</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <UserOutlined />
                <Link className="link" to="/user">台区经理</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <UserOutlined />
                <Link className="link" to="/villages">村庄</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <FileOutlined />
                <Link className="link" to="/faults">故障类型</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background"
              style={{
                padding: 0, display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingRight: 80
              }} >
              <div style={{ position: 'relative' }} className="tdheader-avatar">
                <Avatar
                  style={{
                    backgroundColor: '#f56a00',
                    verticalAlign: 'middle'
                  }}
                  size="large">
                  张三
              </Avatar>
                {/* <div className="avatar-info">x</div> */}
              </div>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb> */}
              <div className="site-layout-background">
                <Route exact path="/" component={Home} />
                <Route path="/repaire" component={Repaire} />
                <Route path="/about" component={About} />
                <Route exact path="/user" component={User} />
                <Route exact path="/user/create" component={UserCreate} />
                <Route path="/villages" component={Villages} />
                <Route path="/faults" component={Faults} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}> ©2018 Created by Eleven</Footer>
          </Layout>
        </Router>
      </Layout>
    )
  }
  return (
    <div className="App">
      { layoutTemp }
    </div>
  );
}
export default App;
