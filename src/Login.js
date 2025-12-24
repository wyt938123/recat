import axios from 'axios'
import {getRoute} from './store/userinfo'
import { useDispatch } from 'react-redux';
export default function Login(){
    let username = '';
    let password = '';
    const dispatch = useDispatch()
    function sendLoign(){
        console.log(username)
        //复习一下返回的是什么对象 
        axios.post("http://127.0.0.1:8000/Login",{username:username,password:password}).then((res)=>{
            console.log(res)
            if(res.data.mes === '登录成功')
                localStorage.setItem("id",res.data.id)
            //如国在这里直接请求路由规则，无法直接触发更新， 应该存在状态管理库中，请求后实时更新页面
            dispatch(getRoute(res.data.id))
        })
    }
    return <div>
       <label> 用户名：<input type="text" onChange={(e)=>{ username= e.target.value  }}></input></label>
        <label> 密码：<input type="password"onChange={(e)=>{ password= e.target.value  }}></input></label>
        <button onClick={sendLoign}>登录</button>
    </div>
}