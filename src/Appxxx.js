import logo from './logo.svg';
import './App.css';
import React from 'react';
import routeArr from './route/routesArr'
import { Routes,Route } from 'react-router-dom';
import {creatRouter} from './route/creatRouter';
import  originarr  from './route//routesArr'
import { useSelector } from 'react-redux';
//为什么要和原始的数组进行合并？？  ---原来可能会有初始的路由规则

import Login from './Login';
function App (){
  let userRoute = useSelector((state)=>{
    return state.userInfo.userRoute
    //切片里的属性
    // initialState:{
    //     userRoute: _localRoute ? JSON.parse(_localRoute) : []   ///为什么这么做？
    // },
  })


   return <div className="App">
          {
            console.log( creatRouter(userRoute.concat(originarr)))
          }
        <div>
          <Routes>
              {
                 creatRouter(userRoute.concat(originarr))
              }
          </Routes>
        </div>
        <Login></Login>
    </div>
}

export default App;
