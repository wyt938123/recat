const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.post('/Login', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    console.log('user',username,password)
    if (username === 'admin' && password === '123456') {
        res.json({
            id: 1,
            mes: '登录成功'
        })
    }
    else if (username === 'admin2' && password === '123456'){
        res.json({
            id: 2,
            mes: '登录成功'
        })
    }
    else{
        res.json({
            mes: '错误'
        })
    }
})
// GET 请求的参数是通过 URL 传递的（如 ?id=1），应该用 req.query.id 获取，而不是 req.body.id
// req.query.id 获取的是字符串类型（如 URL 中 ?id=1 实际是 '1'）
app.get('/getRoute', (req, res) => {
    let id = req.query.id
    if(id === '1'){
        res.json({
            data:[
                {
                        path: "/page1",
                        compont: 'Page1',
                        children:[
                            {
                            path:'Son1',
                            compont:'Page1Son1'
                        },
                        {
                            path:'Son2',
                            compont:'Page1Son2'
                        }
                        ]
                    },
                    {
                        path: "/page2",
                        compont: 'Page2'
                    }
                    , {
                        path: "/page3",
                        compont: 'Page3'
                    }
            ]
        })
    }
})


app.listen(8000,() => {
    console.log('启动')
})