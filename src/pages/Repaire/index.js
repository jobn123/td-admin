import React, { useEffect, useState } from 'react';

import { Table, Row, Col, Radio, notification } from 'antd';
import { getAllRepaires } from '../../api';
// import './index.css';

const columns = [
  {
    title: 'No.',
    dataIndex: 'key',
    key: 'key',
    render: key => <a>{key + 1}</a>,
  },
  {
    title: '报修时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: s => <div>{s.replace(/T/g,' ').replace(/\.\d+Z$/,'')}</div>
  },
  {
    title: '台区名称',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '客户姓名',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: '客户报修电话',
    key: 'phone',
    dataIndex: 'phone'
  },
  // {
  //   title: '产权归属',
  //   key: 'action',
  //   render: (text, record) => (
  //     <span>
  //       公司产权
  //     </span>
  //   ),
  // },
  {
    title: '故障原因',
    dataIndex: 'faulttype',
    key: 'faulttype',
  },
  {
    title: '维修人员',
    dataIndex: 'manager',
    key: 'manager',
  },
  {
    title: '客户拨入电话',
    dataIndex: 'e',
    key: 'e',
  },
  {
    title: '台区管理人',
    dataIndex: 'manager',
    key: 'manager',
  },
]

function Repaire() {
  const [tag, setTag] = useState("0")
  const [page, setPage] = useState(1)
  const [lists, setLists] = useState([])

  const getAllRepaireLists = async () => {
    try {
      const res = await getAllRepaires()
      if (res && res.length) {
        const arrkey = []
        res.map((item, key) => {
          item.key = key
          arrkey.push(item)
        })
        setLists(arrkey)
      }
    } catch (error) {
      // notification.error({
      //   message: 'Notification Title',
      //   description:
      //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      // })
    }
  }

  useEffect(() => {
    getAllRepaireLists()
  }, [page])

  return (
    <div className="Repaire">
      <Row style={{ marginTop: 50 }}>
        <Col style={{ marginBottom: 20 }}>
          <Radio.Group onChange={(e)=> {setTag(e.target.value)}}>
            <Radio.Button value="0">
                全部
              </Radio.Button>
            <Radio.Button value="1">未报修</Radio.Button>
            <Radio.Button value="2">未打分</Radio.Button>
          </Radio.Group>
        </Col>
        <Col span={24}>
          <Table
            onChange={(index)=> setPage(index)}
            style={{ minHeight: 500 }}
            columns={columns} 
            dataSource={lists}
            className="data-box_table"/>
        </Col>
      </Row>
    </div>
  );
}

export default Repaire
