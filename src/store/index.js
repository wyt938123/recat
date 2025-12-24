import { configureStore } from "@reduxjs/toolkit";
//用于将切片链接仓库 ,,,在appindex中 要用provide将仓库和app实例链接
import userInfo from './userinfo'
let store = configureStore({
    reducer:{
        userInfo
    }
})

export default store