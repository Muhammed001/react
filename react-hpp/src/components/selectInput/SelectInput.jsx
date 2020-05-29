import React, { Component } from 'react'
import { InputItem } from 'antd-mobile'

import './SelectInput.css'

export default class SelectInput extends Component {
  state = {
    value: '帅',
    isshow :true
  }
  handleOnblue = (value) => {
    this.setState({isshow:true});
  }
  handleChange = (val) => {
    const {value} = this.state;
    this.setState({value:val});
    value === val || this.setState({ isshow:false })
  }

  abCon = () => {
    return (
     <ul>
       <li onClick={e => this.selected()}>1</li>
       <li>2</li>
       <li>3</li>
       <li>4</li>
       <li>5</li>
       <li>6</li>
       <li>7</li>
     </ul>
    )
  }
  selected = () => {
    alert("选中");
  }

  render() {
    const { value,isshow } = this.state
    return (
      <div className="nv">
        <InputItem
          value={value}
          onBlur={this.handleOnblue}
          onChange={this.handleChange}
        />
         { isshow || <div className="dropDown" title="this is cool">
           {this.abCon()}
        </div>}
        <div className="dropDown1" title="this is cool">
          123456
        </div>
      </div>
    )
  }
}
