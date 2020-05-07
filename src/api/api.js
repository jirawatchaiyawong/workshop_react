import axios from 'axios'

const url = 'http://203.154.59.14:3000/api/v1'


export const getAllUser = () => {
    return new Promise((resolve, reject) => {
        axios.get(url + '/users').then(res => {
            resolve(res.data)
        })
    })
}

export const registerUser = (user) => {
    return new Promise((resolve, reject) => {
      axios.post(url + '/register', user).then(res => {
        resolve(res.data)
      })
    })
  }

  export const UserLogin = (user) => {
    return new Promise((resolve, reject) => {
      axios.post(url + '/login',user).then(res => {
        resolve(res.data)
      })
    })
  }

  
export const getAllProduct = () => {
  return new Promise((resolve, reject) => {
      axios.get(url + '/products').then(res => {
          resolve(res.data)
      })
  })
}

export const getViewProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(url + '/products/'+id).then(res => {
      resolve(res.data)
    })
  })
}