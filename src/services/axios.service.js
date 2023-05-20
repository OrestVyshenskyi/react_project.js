import axios from "axios";
import {baseURL} from "../constants/urls";
import {accessToken} from "../constants/tokens";

const axiosService = axios.create({baseURL:baseURL})

axiosService.interceptors.request.use(res => {
    res.headers.Authorization = `Bearer ${accessToken}`
    return res
})



export {
    axiosService
}