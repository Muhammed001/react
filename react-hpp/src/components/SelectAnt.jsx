import React from 'react'
import { Select } from 'antd'
import jsonp from 'fetch-jsonp'
import querystring from 'querystring'
import './icons.css'
import SuspendButton from 'suspend-button'

// import { UserOutlined } from '@ant-design/icons'

const { Option } = Select

let timeout
let currentValue

let fetch = (value, callback) => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
  currentValue = value

  let fake = () => {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    })
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d
          const data = []
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            })
          })
          callback(data)
        }
      })
  }

  timeout = setTimeout(fake, 300)
}

class SearchInput extends React.Component {
  state = {
    data: [],
    value: undefined,
    pageX: 80,
    pageY: 70,
  }

  handleSearch = (value) => {
    if (value) {
      fetch(value, (data) => this.setState({ data }))
    } else {
      this.setState({ data: [] })
    }
  }

  handleChange = (value) => {
    this.setState({ value })
  }

  //推拽回调函数
  setPanelPosition(left, top) {
    this.setState({ pageX: left, pageY: top })
  }

  test = () => {
    alert(12345);
  }

  render() {
    const options = this.state.data.map((d) => (
      <Option key={d.value}>{d.text}</Option>
    ))
    return (
      <div>
        {/* <UserOutlined className="icon" /> */}
        <Select
          className="searchS"
          showSearch
          value={this.state.value}
          placeholder={this.props.placeholder}
          style={this.props.style}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
          notFoundContent={null}
        >
          {options}
        </Select>
        <div>
          <SuspendButton onClick={this.test} className= 'suspend' style = {{background: '#3885eb'}}>eSpace</SuspendButton>
        </div>
      </div>
    )
  }
}

export default SearchInput
