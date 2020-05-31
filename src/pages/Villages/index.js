import React, { useState, useEffect } from 'react';
import { getAllVillages, addVillages } from '../../api'
import { Table, Row, Col, Button, Modal, Input } from 'antd';

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
    title: '户数',
    dataIndex: 'population',
    key: 'population'
  }
]

function Repaire() {
  const [lists, setLists] = useState([])
  const [page, setPage] = useState(1)
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [population, setPopulation] = useState(0)

  const getVillages = async () => {
    try {
      const res = await getAllVillages()
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

  const hideModal = () => {
    setVisible(false)
  }

  const handleOk = async () => {
    console.log(name)
    console.log(population)

    const params = {
      name,
      population
    }

    try {
      const res = await addVillages(params)

      if (res) {
        setVisible(false)
        getVillages()
      }

    } catch (error) {
    }

  }

  useEffect(() => {
    getVillages()
  }, [page])

  return (
    <div className="Repaire">
      <Row style={{ marginTop: 50 }}>
        <Col>
          <Button type="primary" onClick={()=> setVisible(true)}>新增</Button>
        </Col>
        <Col span={24} style={{ marginTop: 20 }}>
          <Table
            style={{ minHeight: 500 }}
            columns={columns}
            dataSource={lists}
            className="data-box_table" />
        </Col>
      </Row>
      <Modal
        title="新增村庄"
        visible={visible}
        onOk={handleOk}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消">
        <div style={{width: 200, marginBottom: 20}}> 
          <Input placeholder="请输入名称" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div style={{width: 200}}> 
          <Input placeholder="请输入人口" type='number' onChange={(e)=> setPopulation(e.target.value)}/>
        </div>
      </Modal>
    </div>
  )
}

export default Repaire
