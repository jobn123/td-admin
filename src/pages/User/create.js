import React, { useState, useEffect } from 'react'
import { Row, Col, Select, Input, Button, Modal } from 'antd'
import { useHistory } from 'react-router-dom'
import { getAllVillages, addManager } from '../../api'

const { Option } = Select

function Create() {
  const history = useHistory()
  const [lists, setLists] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [valliage, setValliage] = useState([])

  const getVillages = async () => {
    try {
      const res = await getAllVillages()
      if (res && res.length) {
        setLists(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // 
    getVillages()
  }, [])

  const changeScroll = (e, b) => {
    // debugger
  }

  // 新增
  const add = async () => {
    if (name === '') {
      return Modal.warn({
        content: '请输入姓名'
      })
    }

    if (phone === '') {
      return Modal.warn({
        content: '请输入联系方式'
      })
    }

    if (valliage.length === 0) {
      return Modal.warn({
        content: '请选择区域'
      })
    }

    try {
      const params = {
        name,
        phone,
        villages: valliage.join()
      }
      const res = await addManager(params)
      if (res && res.id) {
        Modal.success({
          content: '添加成功'
        })
        return history.push('/user')
      } else {
        throw new Error('error')
      }
    } catch (error) {
      Modal.error({
        content: '添加失败'
      })
    }
  }

  const addArea = (val) => {
    setValliage(val)
  }

  return (
    <div className="Repaire" style={{ minHeight: 500, marginTop: 20, paddingLeft: 30 }}>
      {/* <p style={{ paddingTop: 20 }}>用户类型</p> */}
      {/* <Select style={{ width: 200 }} onPopupScroll={(e)=> changeScroll(e)}>
        <Option value="jack">台区经理</Option>
        <Option value="jack2">管理员</Option>
        <Option value="jack3">维修人员</Option>
      </Select> */}
      <p style={{ marginTop: 20, paddingTop: 20 }}>姓名</p>
      <Input style={{ width: 200 }} 
        placeholder="请输入姓名"
        onChange={(e)=> setName(e.target.value)}/>
      <p style={{ marginTop: 20 }}>联系方式</p>
      <Input style={{ width: 200 }}
         placeholder="请输入联系方式"
        onChange={(e)=> setPhone(e.target.value)}/>
      <p style={{ marginTop: 20 }}>区域</p>
      <Select style={{ width: 200 }} 
        mode="multiple"
        onChange={(e)=> addArea(e)}
        placeholder="请选择管理区域"
        onPopupScroll={(e)=> changeScroll(e)}>
        {lists.map((item, index) => {
         return (<Option key={index} value={item.name}>{item.name}</Option>) 
        })}
      </Select>
      <Row style={{ marginTop: 50 }}>
        <Col span={5}><Button
          onClick={ () => add() }
          style={{ width: 200 }}
          type="primary">创建</Button></Col>
        <Col span={5}>
        <Button
          onClick={ ()=> history.goBack() }
          style={{ width: 200 }}>取消</Button></Col>
      </Row>
    </div>
  );
}

export default Create
