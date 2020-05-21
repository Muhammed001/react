import React, { Component } from 'react'
import DatePicker from 'react-mobile-datepicker'
import { convertDate } from './time';
import './Datepicker.css';

class SimpleDatePicker extends Component {
  state = {
    time: new Date(),
    isOpen: false,
    theme: 'default',
  }

  handleToggle = (isOpen) => () => {
    this.setState({ isOpen })
  }

  handleThemeToggle = (theme) => () => {
    this.setState({ theme, isOpen: true })
  }

  handleSelect = (time) => {
    this.setState({ time, isOpen: false })
  }

  test = (time) => {
    alert(convertDate(time, 'YYYY-MM-DD hh:mm:ss'))
    this.setState({time});
  }

  render() {
    return (
      <div className="App">
        <p className="select-time ">
          {convertDate(this.state.time, 'YYYY-MM-DD hh:mm:ss')}
        </p>
        <div>
          <a
            className="select-btn sm"
            onClick={this.handleThemeToggle('default')}
          >
            default
          </a>
          <a className="select-btn sm" onClick={this.handleThemeToggle('dark')}>
            dark
          </a>
          <a className="select-btn sm" onClick={this.handleThemeToggle('ios')}>
            ios
          </a>
          <a
            className="select-btn sm"
            onClick={this.handleThemeToggle('android')}
          >
            android
          </a>
          <a
            className="select-btn sm"
            onClick={this.handleThemeToggle('android-dark')}
          >
            android-dark
          </a>
        </div>
        <DatePicker
          value={this.state.time}
          // max={new Date()}
          theme={this.state.theme}
          isOpen={this.state.isOpen}
          headerFormat="YYYY-MM-DD hh:mm:ss"
          showCaption
          dateConfig={{
            year: {
              format: 'YYYY',
              caption: '年',
              step: 1,
            },
            month: {
              format: 'M',
              caption: '月',
              step: 1,
            },
            date: {
              format: 'D',
              caption: '日',
              step: 1,
            },
            hour: {
              format: 'hh',
              caption: '时',
              step: 1,
            },
            minute: {
              format: 'mm',
              caption: '分',
              step: 1,
            },
            second: {
              format: 'ss',
              caption: '秒',
              step: 1,
            },
          }}
          onSelect={this.handleSelect}
          onCancel={this.handleToggle(false)}
        />
      </div>
    )
  }
}

export default SimpleDatePicker
