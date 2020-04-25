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
          <Card title="郯城供电" bordered={false}>
            郯城供电郯城供电郯城供电
          </Card>
        </Col>
        <Col span={6} offset={1}>
          <Card title="郯城供电" bordered={false}>
            郯城供电郯城供电郯城供电
          </Card>
        </Col>
        <Col span={6} offset={1}>
          <Card title="郯城供电" bordered={false}>
            郯城供电郯城供电郯城供电
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Home;
