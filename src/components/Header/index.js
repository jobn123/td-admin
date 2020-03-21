import React from 'react';
import { Link } from 'react-router-dom';

function VHeader() {
  const navs = ['首页', '抖音KOL', 'KOL收藏夹', '数据检测', '时下最热', '加入社群', '我要推广']
  return (
    <div className="VHeader">
      <header className="App-header">
        <Link to="/">首页</Link>
        <Link to="/">抖音KOL</Link>
        <Link to="/">KOL收藏夹</Link>
        <Link to="/">数据检测</Link>
        <Link to="/">时下最热</Link>
        <Link to="/">加入社群</Link>
        <Link to="/">我要推广</Link>
      </header>
    </div>
  );
}

export default VHeader;
