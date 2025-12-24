import logo from './logo.svg';
import './App.css';
import React from 'react';
//列表渲染


//注意 -如果是purecompont的话下面的添加不能直接加，要利用新值
class App extends React.Component {
  state = {
    originArr : [1,2,3]
  }
  getArr (){
    return this.state.originArr.map((item)=>{
      console.log(<div>item</div>)
      return <div key={item}>{item}</div>
    })
  }
  addData=()=>{
    this.setState({
      originArr: [
        ...this.state.originArr,
        Math.random()*10
      ]
    })
  }
  render() {
    return <div className="App">
        <div>列表渲染</div>
        {this.getArr()}
        <div onClick={this.addData}>添加数据</div>
    </div>
  };
}

export default App;
