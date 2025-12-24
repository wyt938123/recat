import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    show : true
  }
  f1(){
    if(this.state.show){
      return <div>内容</div>
    }
    else
      return ""
  }
  render() {
    return <div className="App">
        {this.f1()}
        <div onClick={()=>{
          this.setState({
            show :!this.state.show
          })
        }}>{this.state.show ? '隐藏' : '显示'}</div>
        
    </div>
  };
}

export default App;
