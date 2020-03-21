import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Douyin from './pages/Douyin'
import './App.css';
import 'antd/dist/antd.css';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header className="header">
            <div className="headerlogo">Logo</div>
            <Link className="link" to="/">首页</Link>
            <Link className="link" to="/douyin">抖音KOL</Link>
            <Link className="link" to="/">KOL收藏夹</Link>
            <Link className="link" to="/">数据检测</Link>
            <Link className="link" to="/">时下最热</Link>
            <Link className="link" to="/">加入社群</Link>
            <Link className="link" to="/">我要推广</Link>
            <div className="headeruser">
              <Link className="link headerlogin" to="/login">登录</Link>
              <Link className="link headerregis" to="/regis">注册</Link>
            </div>
          </Header>
          <Content>
            <Route exact path="/" component={Home} />
            <Route path="/douyin" component={Douyin} />
            <Route path="/about" component={About} />
          </Content>
        </Router>
        <Footer>京ICP备xxxxxxxxx号-x</Footer>
      </Layout>
    </div>
  );
}

export default App;
