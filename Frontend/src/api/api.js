import axios from "axios"


const apiInstance = axios.create({
      baseURL: "http://localhost:8090",
      withCredentials:true,
})

export default apiInstance
