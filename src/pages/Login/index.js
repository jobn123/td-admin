import React from 'react'
import { createBrowserHistory } from 'history'
import Cookies from 'js-cookie'
import { Input, Row, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.css'
const history = createBrowserHistory()

function Login() {
  const loginConfirm = () => {
    Cookies.set('login', 'true', { expires: 3 })
    history.push('/')
  }
  return (
    <div className="td-login">
      {/* <p>郯电报修管理后台</p> */}
      <p>管理后台</p>
      {/* <Row></Row> */}
      <Row>
        <Input style={{ width: 200, margin: '0 auto' }}
          placeholder="请输入用户名" prefix={<UserOutlined />} />
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Input.Password
          prefix={<LockOutlined />}
          style={{ width: 200, margin: '0 auto' }}
          placeholder="请输入密码" />
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Button type="primary" 
          onClick={loginConfirm}
          style={{ width: 200, margin: '0 auto' }}>登录</Button>
      </Row>
    </div>
  );
}

export default Login;
