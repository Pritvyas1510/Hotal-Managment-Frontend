import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://hotal-managment-backend.vercel.app/api",
    withCredentials:true
})


export default apiRequest;