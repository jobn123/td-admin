import React from 'react';
import { Input, Select, Table, Row, Col, Button } from 'antd';
import './index.css';
const { Search } = Input;
const { Option } = Select;

const columns = [
  {
    title: 'No.',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '报修时间',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '台区名称',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '客户姓名',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags}
      </span>
    ),
  },
  {
    title: '客户报修电话',
    key: 'action',
    render: (text, record) => (
      <span>
        {/* <a style={{ marginRight: 16 }}> {record.tags}</a> */}
        18888888888
      </span>
    ),
  },
  {
    title: '产权归属',
    key: 'action',
    render: (text, record) => (
      <span>
        {/* <a style={{ marginRight: 16 }}> {record.tags}</a> */}
        公司产权
      </span>
    ),
  },
  {
    title: '故障原因',
    dataIndex: 'c',
    key: 'c',
  },
  {
    title: '维修人员',
    dataIndex: 'd',
    key: 'd',
  },
  {
    title: '客户拨入电话',
    dataIndex: 'e',
    key: 'e',
  },
  {
    title: '台区管理人',
    dataIndex: 'f',
    key: 'f',
  },
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
      {/* <Row style={{ marginTop: 50 }}>
        <Col span={2} offset={4}>
          <Select defaultValue="0" style={{ width: '100%' }}>
            <Option value="0">抖音</Option>
            <Option value="1">抖音KOL</Option>
          </Select>
        </Col>
        <Col span={14}>
          <Input.Group compact className="dy-search">
            <Search
              placeholder="请输入关键字"
              enterButton="搜索"
              size="large"
              onSearch={value => console.log(value)}
            />
          </Input.Group>
        </Col>
      </Row> */}
      <Row style={{ marginTop: 50 }}>
        {/* <Button type="primary">添加用户</Button> */}
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
