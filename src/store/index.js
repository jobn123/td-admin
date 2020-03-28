// import HomeStore from "./homeStore"
// import OneStore from "./oneStore"

// let oneStore = new OneStore()
// let homeStore = new HomeStore()

// const stores = {
//   oneStore,
//   homeStore
// }

// /// 默认导出接口
// export default stores
// import { setModel } from 'flooks'
const globalstate = {
  state: {
    loginStatus: false
  },
  actions: ({ model, setState }) => ({
    changeLoginStatus () {
      // const { loginStatus } = model()
      setState({ loginStatus: true })
    }
  })
}

export default globalstate
// setModel('globalstate', globalstate)

