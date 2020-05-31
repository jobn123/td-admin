import React, { useState, useEffect } from 'react';
import { getAllManager } from '../../api'
import { Table, Row, Col, Button } from 'antd';
// 
import { useHistory } from 'react-router-dom'

const columns = [
  {
    title: 'No.',
    dataIndex: 'key',
    key: 'key',
    render: key => <div>{key + 1}</div>
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '负责台区',
    key: 'managevillages',
    dataIndex: 'managevillages'
  }
]

function Repaire() {
  const history = useHistory()
  const [lists, setLists] = useState([])
  const [page, setPage] = useState(1)

  const getManagers = async () => {
    try {
      const res = await getAllManager()
      if (res && res.length) {
        const arrkey = []
        res.map((item, key) => {
          item.key = key
          arrkey.push(item)
        })
        setLists(arrkey)
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getManagers()
  }, [page])
  
  return (
    <div className="Repaire">
      <Row style={{ marginTop: 50 }}>
        <Col>
          <Button type="primary"
            onClick={()=> history.push('/user/create')}>新增</Button>
        </Col>
        <Col span={24} style={{ marginTop: 20 }}>
          <Table
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
