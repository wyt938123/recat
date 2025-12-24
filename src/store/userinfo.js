//创建切片 ， 可以认为是仓库的部分属性？？？

import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const getRoute = createAsyncThunk(
  'creactRoute', // action类型：user/login/pending, user/login/fulfilled, user/login/rejected
  async (id) => {
      // 发送登录请求（参数userInfo包含username和password）
      const response = await axios.get('http://127.0.0.1:8000/getRoute?id='+id);
      localStorage.setItem('userRoute',JSON.stringify(response.data.data))
      // 返回成功结果（会作为fulfilled状态的payload）
      return response.data.data;
    
  }
);
let _localRoute = localStorage.getItem('userRoute')
//createSlice返回的是什么？？？
let userSlice =  createSlice({
    name:'userinfo',  
    initialState:{
        userRoute: _localRoute ? JSON.parse(_localRoute) : []   ///为什么这么做？
    },
    reducers:{
        changeRouete(state,action){
            state.userRoute = action.payload
        }
    },extraReducers(chunk){                                         ///解释一下这段代码是什么含义state, action
        chunk.addCase(getRoute.fulfilled,(state, action)=>{
             state.userInfo = action.payload; // 保存登录成功返回的数据
        // 如果有token，可以在这里存储
        // state.token = action.payload.token;
        })
    }

})
export let {changeRouete} = userSlice.actions
export default userSlice.reducer