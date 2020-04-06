import React from 'react';
import { Row, Col, Select, Input, Button } from 'antd';
const { Option } = Select

function Create() {
  return (
    <div className="Repaire" style={{ minHeight: 500, marginTop: 20, paddingLeft: 30 }}>
      <p style={{ paddingTop: 20 }}>用户类型</p>
      <Select style={{ width: 200 }}>
        <Option>台区经理</Option>
        <Option>管理员</Option>
        <Option>维修人员</Option>
      </Select>
      <p style={{ marginTop: 20 }}>姓名</p>
      <Input style={{ width: 200 }}/>
      <p style={{ marginTop: 20 }}>联系方式</p>
      <Input style={{ width: 200 }}/>
      <p style={{ marginTop: 20 }}>区域</p>
      <Select style={{ width: 200 }}>
        <Option>台区经理</Option>
        <Option>管理员</Option>
        <Option>维修人员</Option>
      </Select>
      <Row style={{ marginTop: 50 }}>
        <Col span={5}><Button 
          style={{ width: 200 }}
          type="primary">创建</Button></Col>
        <Col span={5}>
        <Button
          style={{ width: 200 }}>取消</Button></Col>
      </Row>
    </div>
  );
}

export default Create
