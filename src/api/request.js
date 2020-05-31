import axios from 'axios'

class Request {
  get (url, headers = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        headers: headers
      })
      .then(res => {
        if (res.data.code === 401 || res.data.code === 400) {
          resolve(res.data)
        } else {
          resolve(res.data)
        }
      })
      .catch(err => {
        reject(err)
      })
    })
  }
  post (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}

const request = new Request()

export default request
