import React from 'react';
import { Input, Select, Table, Tabs, Row, Col, List } from 'antd';
import './index.css';
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const columns = [
  {
    title: 'No.',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '抖音账号',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '粉丝',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '作品',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags}
      </span>
    ),
  },
  {
    title: '集均赞',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}> {record.tags}</a>
      </span>
    ),
  },
  {
    title: '集均评论',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}> {record.tags}</a>
      </span>
    ),
  }
];

const data = [
  {
    key: '1',
    name: '1',
    age: '骑着我心爱的小摩托',
    address: '20W',
    tags: 1100,
  },
  {
    key: '2',
    name: '2',
    age: '骑着我心爱的小摩托',
    address: '20W',
    tags: 1100,
  },
  {
    key: '3',
    name: '3',
    age: '骑着我心爱的小摩托',
    address: '20W',
    tags: 1100,
  },
];

const listdata = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function callback() {
}
function DouYin() {
  return (
    <div className="DouYin">
      <Row style={{ marginTop: 50 }}>
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
      </Row>
      <Row style={{ marginTop: 50 }}>
        <Col span={13} offset={2}>
          <Table columns={columns} dataSource={data} className="data-box_table"/>
        </Col>
        <Col span={6} offset={1}>
          <Tabs defaultActiveKey="1" onChange={callback} className="data-box_tab">
            <TabPane tab="热搜榜" key="1">
              {/* Content of Tab Pane 1Content of Tab */}
              <List
                size="small"
                bordered
                dataSource={listdata}
                renderItem={item => (
                  <List.Item>
                    {item}
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="音乐榜" key="2">
              <List
                size="small"
                bordered
                dataSource={listdata}
                renderItem={item => (
                  <List.Item>
                    {item}
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="视频榜" key="3">
              <List
                size="small"
                bordered
                dataSource={listdata}
                renderItem={item => (
                  <List.Item>
                    {item}
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default DouYin;
