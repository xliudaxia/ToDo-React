import React from 'react'
import '../old/App.css'
import '../assets/css/index.css'


/*
class要换成className
for换成HtmlFor
*/
class Home extends React.Component {
  //props主要用于父子组件传值，固定写法
  constructor(props) {
    super(props)
    this.state = {
      name: '张三',
      sex: '中性',
      userinfo: {
        username: ' 洪金宝',
      },
      title: '我是一个title',
      color: 'red',
      styles: { color: 'green', height: '222px', fontSize: '32px' },
    }
  }
  render() {
    return (
      <div>
        <h2>REact组件里面的节点都要被根节点包裹起来</h2>
        <h2>姓名：{this.state.name}</h2>
        <h2>年龄：{this.state.sex}</h2>
        <h2 className={this.state.color} title={this.state.title}>
          朋友：{this.state.userinfo.username}
        </h2>
        <br />
        <label htmlFor="name">姓名</label>
        <input id="name"></input>
        <div style={this.state.styles}>绿色div</div>
      </div>
    )
  }
}
export default Home
