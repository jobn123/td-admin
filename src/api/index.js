import request from './request'
import { BASE_URL } from './config'

// 获取所有的报修列表
export const getAllRepaires = async (page=1) => {
  const url = `${BASE_URL}/repaire/lists?limit=10&page=${page}`
  
  const data = await request.get(url)
  return data
}

// 获取所有的台区经理
export const getAllManager = async (page=1) => {
  const url = `${BASE_URL}/users/managers?limit=10&page=${page}`
  
  const data = await request.get(url)
  return data
}

// 获取所有村庄列表
export const getAllVillages = async (page=1) => {
  const url = `${BASE_URL}/villages/lists?limit=10&page=${page}`
  
  const data = await request.get(url)
  return data
}

// 新增村庄
export const addVillages = async (params) => {
  const url = `${BASE_URL}/villages/add?name=${params.name}&population=${params.population}`
  
  const data = await request.post(url, params)
  return data
}

// 新增台区经理
export const addManager = async (params) => {
  const url = `${BASE_URL}/users/create?name=${params.name}&phone=${params.phone}&villages=${params.villages}`
  
  const data = await request.post(url, params)
  return data
}

// 故障类型
export const getFaults = async () => {
  const url = `${BASE_URL}/faults/lists`
  
  const data = await request.get(url)
  return data
}