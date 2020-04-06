import React from 'react';
import { Input, Select, Table, Row, Col } from 'antd';

const columns = [
  {
    title: 'No.',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '用户类型',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '联系方式',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '负责台区',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags}
      </span>
    ),
  }
];

const data = [
  {
    key: '1',
    name: '1',
    age: '09:30',
    address: '西杨庄',
    tags: '张三',
    c: '开关坏',
    d: '苏瑞洁',
    e: '3700695',
    f: '李刚'
  },
  {
    key: '2',
    name: '2',
    age: '09:30',
    address: '西杨庄',
    tags: '李四',
    c: '开关坏',
    d: '苏瑞洁',
    e: '3700695',
    f: '李刚'
  },
  {
    key: '3',
    name: '3',
    age: '09:30',
    address: '西杨庄',
    tags: '王五',
    c: '开关坏',
    d: '苏瑞洁',
    e: '3700695',
    f: '李刚'
  },
];

function Repaire() {
  return (
    <div className="Repaire">
      <Row style={{ marginTop: 50 }}>
        <Col span={24}>
          <Table 
            style={{ minHeight: 500 }}
            columns={columns} 
            dataSource={data} 
            className="data-box_table"/>
        </Col>
      </Row>
    </div>
  );
}

export default Repaire
