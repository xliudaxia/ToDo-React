import React from 'react'
import { Button } from 'antd'
class ToDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  addData = () => {
    var tempList = this.state.list
    tempList.push(this.refs.title.value)
    this.setState({
      list: tempList,
    })
    this.refs.title.value = ''
  }
  deleteData = (key) => {
    let tempList = this.state.list
    tempList.splice(key, 1)
    this.setState({
      list: tempList,
    })
  }
  render() {
    return (
      <div>
        <h1>ToDo 案例</h1>
        <input ref="title" />
        <Button onClick={this.addData}>增加+</Button>
        <br />
        <br />
        <ul>
          <li>
            {this.state.list.map((value, key) => {
              return (
                <ul key={key}>
                  <li>
                    {value} ------
                    <Button danger onClick={this.deleteData.bind(this, key)}>
                      删除-
                    </Button>
                  </li>
                </ul>
              )
            })}
          </li>
        </ul>
      </div>
    )
  }
}

export default ToDo
