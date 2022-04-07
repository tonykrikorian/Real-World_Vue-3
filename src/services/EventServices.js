import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tonykrikorian/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'Application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}
