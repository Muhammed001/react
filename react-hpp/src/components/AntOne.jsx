import React, { Component } from 'react'

import { version, Button, Input } from 'antd'
import 'antd/dist/antd.css'
import { UserOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import SelectAnt from './SelectAnt';

const { Option } = Select

function onChange(value) {
  console.log(`selected ${value}`)
}

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

function onSearch(val) {
  console.log('search:', val)
}

class AntOne extends Component {
  render() {
    return (
      <div>
        <p>Ant Desing 版本： {version}</p>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="link">Link</Button>
          <br />
          <br />
          <Input placeholder="default size" prefix={<UserOutlined />} />
          <br />
          <br />
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
        <br />
        <br/>
        <div>
        <SelectAnt></SelectAnt></div>
      </div>
    )
  }
}

export default AntOne
