import React from 'react'
import showgirl from '../assets/images/showgirl.jpg'
import '../assets/css/index.css'

class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'gou',
      alibaba: <h1>日你妈的中国</h1>,
      newsList: [1111, 'caotama', 3333],
      city: '',
      citys: ['北京', '上海'],
      hobby: [
        {
          title: '睡觉',
          checked: true,
        },
        { title: '吃饭', checked: false },
        { title: '敲代码', checked: true },
      ],
      info: '',
    }
  }
  handelCity = (e) => {
    this.setState({
      city: e.target.value,
    })
    console.log(this.state.city)
  }
  handelHobby = (key) => {
    let hobby = this.state.hobby
    hobby[key].checked = !hobby[key].checked
    this.setState({
      hobby: hobby,
    })
    console.log(hobby)
  }
  handleInfo = (e) => {
    this.setState({
      info: e.target.value,
    })
    console.log(this.state.info)
  }

  render() {
    return (
      <div className="news">
        <h2>
          fuck News
          <hr />
          爱好：
          {this.state.hobby.map((value, key) => {
            return (
              <span key={key}>
                {value.title}
                <input
                  type="checkbox"
                  checked={value.checked}
                  onChange={this.handelHobby.bind(this, key)}
                ></input>
              </span>
            )
          })}
          <hr />
          <hr />
          <hr />
          <img src={showgirl}></img>
        </h2>
        居住城市：
        <select value={this.state.city} onChange={this.handelCity}>
          {this.state.citys.map((value, key) => {
            return <option key={key}>{value}</option>
          })}
          <option></option>
        </select>
        备注：
        <textarea value={this.state.info} onChange={this.handleInfo} />
        <ul>
          {this.state.newsList.map((value, key) => {
            return <li key={key}>{value}</li>
          })}
        </ul>
      </div>
    )
  }
}
export default News
