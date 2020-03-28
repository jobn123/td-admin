import { observable, action } from "mobx"

class HomeStore {
  @observable loginStatus = false
  @action changeLoginStatus() {
    this.loginStatus = true
  }
}

export default HomeStore