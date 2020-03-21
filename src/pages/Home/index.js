import React, { Fragment } from 'react';
import { Carousel, Card, Col, Row } from 'antd';
import './index.css';

function onChange(a, b, c) {
  console.log(a, b, c);
}

function Home() {
  return (
    <Fragment>
      <Carousel afterChange={onChange}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <Row style={{ marginTop: 50 }}>
        <Col span={6} offset={2}>
          <Card title="抖音榜单" bordered={false}>
            基于抖音移动端数据分析，VideoRank提供抖音自媒体发展状况的动态、详实数据，以及全方位的咨询评估服务。
          </Card>
        </Col>
        <Col span={6} offset={1}>
          <Card title="数据监测" bordered={false}>
            全称为抖音视频分钟级传播监测。对抖音视频定制分钟级传播效果监测，实时汇总客签单发布情况，有效验证传播效果。
          </Card>
        </Col>
        <Col span={6} offset={1}>
          <Card title="粉丝画像" bordered={false}>
            对抖音用户生成粉丝画像，画像会从粉丝性别、年龄、地区、星座四个维度进行分析，更方便对KOL的定位和选择。
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Home;
