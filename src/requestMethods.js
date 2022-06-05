import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2VlMTY2Njk5MDZjN2Q3ZWM3YTZiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTQ4MTY1MiwiZXhwIjoxNjQ5NzQwODUyfQ.u_dd41OKZLw1KmzhSeAZCP9YK8G0w2UCykPqNUvD34g"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`
  },
})